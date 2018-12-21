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
        // this.metadataWhitelist = ['position'];

        files.forEach((fileLocation, index) => {
            const file = fs.readFileSync(fileLocation, 'utf8');
            const md = require('markdown-it')();
            const renderedHtml = md.render(file);
            const $ = cheerio.load(renderedHtml);

            const docName = webifyPath(fileLocation).match(/[^\/]+$/)[0].replace('.md', '');

            let docTitle = $('h1').first().text();
            // set the docTitle
            if (docTitle.trim() === '') {
                docTitle = docName;
            }

            corpus.push({
                id: webifyPath(fileLocation).replace('.md', ''),
                name: docTitle
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
        fs.writeFile(indexFile, JSON.stringify(lunrIndex), 'utf8', err => (err ? console.log(err) : null));
    }

    if (corpusFile) {
        fs.writeFile(corpusFile, JSON.stringify(corpus), 'utf8', err => (err ? console.log(err) : null));
    }
});
