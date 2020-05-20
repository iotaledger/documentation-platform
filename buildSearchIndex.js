/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const strip = require('strip-markdown');
const emoji = require('node-emoji');
const chalk = require('chalk');
const axios = require('axios').default;

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
    if (searchServer[searchServer.length - 1] !== '/') {
        searchServer += '/';
    }
    console.log(`Solr: Server at ${searchServer}`);

    const options = {
        headers: {
        }
    };

    if (searchAuth) {
        options.headers.Authorization = "Basic " + searchAuth;
    }

    let res;
    console.log(`Solr: Deleting Core ${searchCore}`);
    try {
        res = await axios.get(`${searchServer}solr/admin/cores?action=UNLOAD&core=${searchCore}&deleteInstanceDir=true`, options);
        console.log(JSON.stringify(res.data, undefined, '\t'));
    } catch (err) {
        if (!err.response || !err.response.data || !err.response.data.error || err.response.data.error.code !== 400) {
            console.error('Error Deleting Core', err.toString());
        }
    }
    try {
        console.log(`Solr: Creating Core ${searchCore}`);
        res = await axios.get(`${searchServer}solr/admin/cores?action=CREATE&name=${searchCore}&configSet=_default`, options);
        console.log(JSON.stringify(res.data, undefined, '\t'));

        console.log(`Solr: Get Schema Fields ${searchCore}`);
        res = await axios.get(`${searchServer}solr/${searchCore}/schema/fields`, options);
        console.log(JSON.stringify(res.data, undefined, '\t'));

        const titleOp = res.data.fields && res.data.fields.find(f => f.name === 'title') ? 'replace-field' : 'add-field';
        const bodyOp = res.data.fields && res.data.fields.find(f => f.name === 'body') ? 'replace-field' : 'add-field';
        const snippetOp = res.data.fields && res.data.fields.find(f => f.name === 'snippet') ? 'replace-field' : 'add-field';
        const tagsOp = res.data.fields && res.data.fields.find(f => f.name === 'tags') ? 'replace-field' : 'add-field';

        console.log(`Solr: Update Schema ${searchCore}`);

        // the omitNorms is critical in the schema to boost the scoring of documents that
        // have multiple hits for terms
        res = await axios({
            method: 'POST',
            url: `${searchServer}solr/${searchCore}/schema`,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            data: `{
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
        console.log(JSON.stringify(res.data, undefined, '\t'));
        console.log(`Solr: Adding documents to ${searchCore}`);
        res = await axios.post(`${searchServer}solr/${searchCore}/update?commit=true`, corpus, options);
        console.log(JSON.stringify(res.data, undefined, '\t'));
        console.log('Solr: Status of Core ${searchCore}');
        res = await axios.get(`${searchServer}solr/admin/cores?action=STATUS&code=${searchCore}`, options);
        console.log(JSON.stringify(res.data, undefined, '\t'));
    } catch (err) {
        console.error(JSON.stringify(err.response.data.error, undefined, '\t'));
        throw new Error('Error Initializing Solr');
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