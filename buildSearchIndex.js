/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const strip = require('strip-markdown');
const emoji = require('node-emoji');
const chalk = require('chalk');
const fetch = require('node-fetch');

const webifyPath = p => p.replace(/\\/g, '/');

async function indexDocs(searchServer, searchAuth, searchCore, projectDataFile) {
    const corpus = [];

    const projectData = JSON.parse(fs.readFileSync(projectDataFile).toString());

    for (let i = 0; i < projectData.length; i++) {
        const project = projectData[i];

        const projDetail = `Project '${project.name}' in '${project.folder}'`;
        console.log(chalk.blue.underline(`\n${projDetail}`));

        for (let j = 0; j < project.versions.length; j++) {
            const version = project.versions[j];
            console.log(chalk.cyan(`\n\tv${version.version}`));

            for (let k = 0; k < version.pages.length; k++) {
                if (!version.pages[k].link.startsWith('http')) {
                    console.log(chalk.cyan(`\t\tAdding '${version.pages[k].name}' in file '${version.pages[k].link}.md'`));
                    await addFileToCorpus(path.join(__dirname, `${version.pages[k].link}.md`), version.pages[k].toc, version.pages[k].tags, corpus);
                }
            }
        }
    }

    await populateSolr(searchServer, searchAuth, searchCore, corpus);
}

async function populateSolr(searchServer, searchAuth, searchCore, corpus) {
    try {
        if (!searchServer.endsWith('/')) {
            searchServer += '/';
        }
        if (!searchServer.endsWith('solr/')) {
            searchServer += 'solr/';
        }

        console.log(`Solr: Server at ${searchServer}`);

        const options = {
            headers: {
            }
        };

        if (searchAuth) {
            options.headers.Authorization = 'Basic ' + searchAuth;
        }

        console.log(`Solr: Deleting Core ${searchCore}`);
        let res = await fetch(`${searchServer}admin/cores?action=UNLOAD&core=${searchCore}&deleteInstanceDir=true`, options);
        let resData;
        if (res.ok) {
            resData = await res.json();
            console.log(JSON.stringify(resData, undefined, '\t'));
        } else {
            if (res.status !== 400) {
                throw new Error(`${res.status}: ${res.statusText}:\n${resData ? JSON.stringify(resData, undefined, '\t') : 'No Data'}`);
            }
        }

        console.log(`Solr: Creating Core ${searchCore}`);
        res = await fetch(`${searchServer}admin/cores?action=CREATE&name=${searchCore}&configSet=_default`, options);
        if (res.ok) {
            resData = await res.json();
            console.log(JSON.stringify(resData, undefined, '\t'));
        } else {
            throw new Error(`${res.status}: ${res.statusText}:\n${resData ? JSON.stringify(resData, undefined, '\t') : 'No Data'}`);
        }

        console.log(`Solr: Get Schema Fields ${searchCore}`);
        res = await fetch(`${searchServer}${searchCore}/schema/fields`, options);
        if (res.ok) {
            resData = await res.json();
            console.log(JSON.stringify(resData, undefined, '\t'));
        } else {
            throw new Error(`${res.status}: ${res.statusText}:\n${resData ? JSON.stringify(resData, undefined, '\t') : 'No Data'}`);
        }

        const titleOp = resData.fields && resData.fields.find(f => f.name === 'title') ? 'replace-field' : 'add-field';
        const bodyOp = resData.fields && resData.fields.find(f => f.name === 'body') ? 'replace-field' : 'add-field';
        const snippetOp = resData.fields && resData.fields.find(f => f.name === 'snippet') ? 'replace-field' : 'add-field';
        const tagsOp = resData.fields && resData.fields.find(f => f.name === 'tags') ? 'replace-field' : 'add-field';

        console.log(`Solr: Update Schema ${searchCore}`);

        // the omitNorms is critical in the schema to boost the scoring of documents that
        // have multiple hits for terms
        res = await fetch(`${searchServer}${searchCore}/schema`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: `{
            "${titleOp}" : {
                "name": "title",
                "type": "text_general",
                "stored": true
            },
            "${bodyOp}" : {
                "name": "body",
                "type": "text_general",
                "omitNorms": true,
                "stored": true
            },
            "${snippetOp}" : {
                "name": "snippet",
                "type": "text_general",
                "stored": true
            },
            "${tagsOp}" : {
                "name": "tags",
                "type": "text_general",
                "stored": true
            }
        }`
        });
        if (res.ok) {
            resData = await res.json();
            console.log(JSON.stringify(resData, undefined, '\t'));
        } else {
            throw new Error(`${res.status}: ${res.statusText}:\n${resData ? JSON.stringify(resData, undefined, '\t') : 'No Data'}`);
        }
        console.log(`Solr: Adding documents to ${searchCore}`);
        res = await fetch(`${searchServer}${searchCore}/update?commit=true`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(corpus)
        });
        if (res.ok) {
            resData = await res.json();
            console.log(JSON.stringify(resData, undefined, '\t'));
        } else {
            throw new Error(`${res.status}: ${res.statusText}:\n${resData ? JSON.stringify(resData, undefined, '\t') : 'No Data'}`);
        }
        console.log('Solr: Status of Core ${searchCore}');
        res = await fetch(`${searchServer}admin/cores?action=STATUS&code=${searchCore}`, options);
        if (res.ok) {
            resData = await res.json();
            console.log(JSON.stringify(resData, undefined, '\t'));
        } else {
            throw new Error(`${res.status}: ${res.statusText}:\n${resData ? JSON.stringify(resData, undefined, '\t') : 'No Data'}`);
        }
    } catch (err) {
        throw new Error(err.message);
    }
}

async function addFileToCorpus(fileLocation, toc, tags, corpus) {
    try {
        const file = fs.readFileSync(fileLocation, 'utf8');

        let markdownStructure;

        const resultStripped = await remark()
            .use(() => {
                return (ms) => { markdownStructure = ms; };
            })
            .use(strip)
            .process(file);

        let tocLevel1 = toc && toc.find(t => t.level === 1);
        let docTitle = tocLevel1 ? tocLevel1.name : undefined;

        let docSnippetItem = findItem(markdownStructure, 'text', 50);
        let docSnippet = docSnippetItem ? docSnippetItem.value : '';
        if (docSnippet && docSnippet.length > 160) {
            docSnippet = `${docSnippet.substr(0, 160)}...`;
        }

        if (!docTitle || docTitle.trim().length === 0) {
            const docName = webifyPath(fileLocation)
                .match(/[^/]+$/)[0]
                .replace('.md', '');

            docTitle = docName;
        }

        const docPath = webifyPath(path.relative('.', fileLocation)).replace('.md', '');
        corpus.push({
            id: docPath,
            title: docTitle,
            snippet: docSnippet,
            body: resultStripped.toString(),
            tags: (tags || []).join(', ')
        });
    } catch (err) {
        throw new Error(`Failed processing '${fileLocation}'\n${err.message}`);
    }
}

function findItem(elem, findType, minLength) {
    if (elem.type === findType && elem.value && elem.value.length >= minLength) {
        return elem;
    }

    if (elem.children) {
        for (let i = 0; i < elem.children.length; i++) {
            const f = findItem(elem.children[i], findType, minLength);
            if (f) {
                return f;
            }
        }
    }
}

console.log(chalk.green.underline.bold('Build Search Index'));

const searchServer = process.env.SEARCH_ENDPOINT || 'http://localhost:8983/';
const searchCore = process.env.SEARCH_CORE || 'document-core-local';
const searchAuth = process.env.SEARCH_AUTHORIZATION;
const projectData = 'projects.json';

console.log('SEARCH_ENDPOINT', searchServer);
console.log('SEARCH_CORE', searchCore);

indexDocs(searchServer, searchAuth, searchCore, projectData)
    .then(() => {
        console.log(chalk.green(`\n${emoji.get('smile')}  Completed Successfully`));
    })
    .catch((err) => {
        console.error();
        console.error(chalk.red('*'.repeat(80)));
        console.error(chalk.red('Building Search Index failed with the following error:'));
        console.error(chalk.red(err.message));
        console.error(chalk.red('\nPlease run the buildProjects script in the documentation repo to see if that can provide you with any more clues to the failure.'));
        console.error(chalk.red('*'.repeat(80)));
        console.error();
        process.exit(1);
    });