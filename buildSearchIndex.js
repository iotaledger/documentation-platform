/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const strip = require('strip-markdown');
const emoji = require('node-emoji');
const chalk = require('chalk');
const lunr = require('lunr');

const webifyPath = p => p.replace(/\\/g, '/');


async function indexDocs(projectDataFile, corpusFile, indexFile) {
    const corpus = [];
    const documents = [];

    const projectData = JSON.parse(fs.readFileSync(projectDataFile).toString());

    for (let i = 0; i < projectData.length; i++) {
        const project = projectData[i];

        const projDetail = `Project '${project.name}' in '${project.folder}'`;
        console.log(chalk.blue.underline(`\n${projDetail}`));

        for (let j = 0; j < project.versions.length; j++) {
            const version = project.versions[j];
            console.log(chalk.cyan(`\n\tv${version.version}`));

            for (let k = 0; k < version.pages.length; k++) {
                console.log(chalk.cyan(`\t\tAdding '${version.pages[k].name}' in file '${version.pages[k].link}.md'`));
                await addFileToCorpusAndDocuments(path.join(__dirname, `${version.pages[k].link}.md`), version.pages[k].toc, corpus, documents);
            }
        }
    }

    const lunrIndex = lunr((config) => {
        config.ref('id');
        config.field('docTitle', { boost: 10 });
        config.field('docBody', { boost: 5 });

        documents.forEach((doc) => {
            config.add(doc);
        });
    });

    const dirName = path.dirname(corpusFile);
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }

    fs.writeFileSync(corpusFile, JSON.stringify(corpus));
    fs.writeFileSync(indexFile, JSON.stringify(lunrIndex));
}

async function addFileToCorpusAndDocuments(fileLocation, toc, corpus, documents) {
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

    let docSummaryItem = findItem(markdownStructure, 'text', 50);
    let docSummary = docSummaryItem ? docSummaryItem.value : '';
    if (docSummary && docSummary.length > 160) {
        docSummary = `${docSummary.substr(0, 160)}...`;
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
        name: docTitle,
        summary: docSummary
    });

    documents.push({
        docTitle,
        docBody: resultStripped.toString(),
        id: docPath
    });
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

const projectData = process.argv[2];
const corpusFile = process.argv[3];
const indexFile = process.argv[4];
if (!projectData || !corpusFile) {
    console.log('\nUsage: \nprojectDataFile\ncorpusFile\nindexFile\n');
    process.exit(1);
}
indexDocs(projectData, corpusFile, indexFile)
    .then(() => {
        console.log(chalk.green(`\n${emoji.get('smile')}  Completed Successfully`));
    })
    .catch((err) => {
        console.error(chalk.red(`\n${emoji.get('frown')}  Building failed with the following error:`));
        console.error(chalk.red(err));
        process.exit(1);
    });