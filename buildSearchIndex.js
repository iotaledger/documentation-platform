/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const mit = require('markdown-it');
const emoji = require('node-emoji');
const chalk = require('chalk');
const lunr = require('lunr');

const webifyPath = p => p.replace(/\\/g, '/');


function indexDocs(projectDataFile, corpusFile, indexFile) {
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
                addFileToCorpusAndDocuments(path.join(__dirname, `${version.pages[k].link}.md`), corpus, documents);
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

function addFileToCorpusAndDocuments(fileLocation, corpus, documents) {
    const file = fs.readFileSync(fileLocation, 'utf8');
    const renderedHtml = mit().render(file);
    const $ = cheerio.load(renderedHtml);

    let docTitle = $('h1')
        .first()
        .text();

    let docSummary = $('p')
        .first()
        .text();

    if (docSummary.length > 160) {
        docSummary = `${docSummary.substr(0, 160)}...`;
    }

    if (docTitle.trim().length === 0) {
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
        docBody: $.text(),
        id: docPath
    });
}

try {
    console.log(chalk.green.underline.bold('Build Search Index'));

    const projectData = process.argv[2];
    const corpusFile = process.argv[3];
    const indexFile = process.argv[4];
    if (!projectData || !corpusFile) {
        console.log('\nUsage: \nprojectDataFile\ncorpusFile\nindexFile\n');
        process.exit(1);
    }
    indexDocs(projectData, corpusFile, indexFile);
    console.log(chalk.green(`\n${emoji.get('smile')}  Completed Successfully`));
} catch (err) {
    console.error(chalk.red(`\n${emoji.get('frown')}  Building failed with the following error:`));
    console.error(chalk.red(err.message));
    process.exit(1);
}
