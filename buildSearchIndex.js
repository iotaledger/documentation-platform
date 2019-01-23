#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const dir = process.argv[2]
const corpusFile = process.argv[3]

const webifyPath = p => p.replace(/\\/g, '/')

if (!dir) {
  console.log('\nUsage: \ndirectory\n')
  process.exit(1)
}

const listFiles = dir =>
  fs.statSync(dir).isDirectory()
    ? Array.prototype.concat(
        ...fs.readdirSync(dir).map(f => listFiles(path.join(dir, f)))
      )
    : dir

const files = listFiles(dir)
const corpus = []

const indexDocs = callback => {
  files
    .filter(f => /.md$/i.test(f))
    .forEach((fileLocation, index) => {
      const file = fs.readFileSync(fileLocation, 'utf8')
      const md = require('markdown-it')()
      const renderedHtml = md.render(file)
      const $ = cheerio.load(renderedHtml)

      const docName = webifyPath(fileLocation)
        .match(/[^\/]+$/)[0]
        .replace('.md', '')

      let docTitle = $('h1')
        .first()
        .text()
      let docSummary = $('p')
        .first()
        .text()
        .substr(0, 160)

      // set the docTitle
      if (docTitle.trim() === '') {
        docTitle = docName
      }

      corpus.push({
        id: webifyPath(fileLocation).replace('.md', ''),
        name: docTitle,
        summary: docSummary
      })
    })

  const dirName = path.dirname(corpusFile)
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName)
  }

  fs.writeFileSync(corpusFile, JSON.stringify(corpus), 'utf8', err =>
    err ? console.error(err) : null
  )
}

indexDocs()
