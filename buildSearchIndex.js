#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const lunr = require('lunr');

const dir = process.argv[2];
const indexFile = process.argv[3];
const corpusFile = process.argv[4];

const webifyPath = (p) => p.replace(/\\/g, '/');

if (!dir) {
    console.log('\nUsage: \ndirectory\n');
    process.exit(1);
}

const listFiles = dir => fs.statSync(dir).isDirectory()
    ? Array.prototype.concat(...fs.readdirSync(dir).map(f => listFiles(path.join(dir, f))))
    : dir;

const files = listFiles(dir);
const corpus = [];

const indexDocs = callback => {
    // setup lunr
    const lunrIndex = lunr(function () {
        this.ref('id');
        this.field('docTitle', { boost: 10 });
        this.field('docBody', { boost: 5 });

        files
            .filter(f => /.md$/i.test(f))
            .filter(f => !/doc-index/i.test(f))
            .forEach((fileLocation, index) => {
                const file = fs.readFileSync(fileLocation, 'utf8');
                const md = require('markdown-it')();
                const renderedHtml = md.render(file);
                const $ = cheerio.load(renderedHtml);

                const docName = webifyPath(fileLocation).match(/[^\/]+$/)[0].replace('.md', '');

                let docTitle = $('h1').first().text();
                let docSummary = $('p').first().text().substr(0, 160);

                // set the docTitle
                if (docTitle.trim() === '') {
                    docTitle = docName;
                }

                corpus.push({
                    id: webifyPath(fileLocation).replace('.md', ''),
                    name: docTitle,
                    summary: docSummary
                });

                const indexDoc = {
                    docTitle,
                    docBody: $.html(),
                    id: webifyPath(fileLocation).replace('.md', '')
                };

                this.add(indexDoc);
            }, this);
    });
    callback(lunrIndex);
};

indexDocs(lunrIndex => {
    if (indexFile) {
        const dirName = path.dirname(indexFile);
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }

        fs.writeFileSync(indexFile, JSON.stringify(lunrIndex), 'utf8', err => (err ? console.error(err) : null));
    }

    if (corpusFile) {
        const dirName = path.dirname(corpusFile);
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }

        fs.writeFileSync(corpusFile, JSON.stringify(corpus), 'utf8', err => (err ? console.error(err) : null));
    }
});
