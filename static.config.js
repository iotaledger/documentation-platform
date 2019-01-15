import chokidar from 'chokidar';
import fs from 'fs-extra';
import path from 'path';
import React, { Component } from 'react';
import { reloadRoutes } from 'react-static/node';
import { ServerStyleSheet } from 'styled-components';
import { buildProjects, getDocPages } from './buildProjects';
import HotJar from './src/components/atoms/HotJar';
import { siteRoot, hotJarId } from './src/config.json';

const docsFolder = 'docs';

chokidar.watch(`../${docsFolder}`).on('all', () => reloadRoutes());

const packageFile = 'package.json'; // Point this to your package.json file
const repoName = 'IOTA Documentation';
const repo = 'iotaledger/documentation';
const repoURL = `https://github.com/${repo}`;

const webifyPath = (p) => p.replace(/\\/g, '/');

try {
    // eslint-disable-next-line
    process.env.REPO_VERSION = require(path.resolve(packageFile)).version;
} catch (err) {
    //
}

// These are the documentation pages. They can either use the `markdownSrc` to point
// to a markdown file, or they can use `component` to point to a react component
const docPages = getDocPages(docsFolder);

// This is the complete tree of all the documents with meta data like tocs
const projects = buildProjects(docsFolder);

// No need to touch any of this, unless you want to.
export default {
    siteRoot,
    getSiteData: () => ({
        projects,
        repo,
        repoURL,
        repoName
    }),
    getRoutes: () => [
        {
            path: '/',
            component: 'src/containers/Home'
        },
        ...docPages.map(page => ({
            path: page.path,
            component: 'src/containers/Doc',
            getData: async () => ({
                markdown: processMarkdown(page.markdownSrc),
                editPath:
                    repoURL +
                    '/blob/master/' +
                    webifyPath(path.join(
                        webifyPath(__dirname).split('/').pop(),
                        page.markdownSrc
                    )),
                title: page.title
            })
        })),
        {
            path: '/search',
            component: 'src/containers/Search'
        },
        {
            is404: true,
            path: '/404',
            component: 'src/containers/NotFound'
        }
    ],
    renderToHtml: (render, Comp, meta) => {
        try {
            const sheet = new ServerStyleSheet();
            const html = render(sheet.collectStyles(<Comp />));
            meta.styleTags = sheet.getStyleElement();
            return html;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('ERROR', e);
        }
    },
    Document: class CustomHtml extends Component {
        render() {
            const { Html, Head, Body, children, renderMeta } = this.props;

            return (
                <Html>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                        <link rel="shortcut icon" href="/favicon/favicon.ico" />
                        <link rel="manifest" href="/favicon/site.webmanifest" />
                        <meta name="apple-mobile-web-app-title" content={repoName} />
                        <meta name="application-name" content={repoName} />
                        <meta name="msapplication-TileColor" content="#ffffff" />
                        <meta name="theme-color" content="#ffffff" />
                        {renderMeta.styleTags}
                        <title>{repoName}</title>
                    </Head>
                    <Body>
                    {children}
                    <HotJar id={hotJarId} />
                    </Body>
                </Html>
            );
        }
    }
};

function processMarkdown(markdownSrc) {
    let markdown = fs.readFileSync(markdownSrc).toString();
    markdown = inlineMarkdownImage(markdown, markdownSrc);
    markdown = inlineImg(markdown, markdownSrc);
    markdown = replaceRootUrls(markdown);
    return markdown;
}

function inlineImg(markdown, docPath) {
    const re = /(<img src="(.*?)")/gm;

    let match;
    do {
        match = re.exec(markdown);
        if (match && match.length === 3) {
            try {
                if (!match[2].startsWith('http') && match[2].length > 0) {
                    const imgFilename = path.resolve(path.join(path.dirname(docPath), match[2]));
                    const base64 = imageToBase64(imgFilename);
                    markdown = markdown.replace(match[1], `<img src="${base64}"`);
                }
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(`Missing image ${match[1]} in ${docPath}`, err);
            }
        }
    } while (match);

    return markdown;
}

function replaceRootUrls(markdown) {
    return markdown.replace(/root:\/\/(.*?)(.md)/g, `/${docsFolder}/$1`);
}

function inlineMarkdownImage(markdown, docPath) {
    const re = /(!\[(.*?)\]\((.*?)\))/gm;

    let match;
    do {
        match = re.exec(markdown);

        if (match && match.length === 4) {
            try {
                if (!match[3].startsWith('http') && match[3].length > 0) {
                    const imgFilename = path.resolve(path.join(path.dirname(docPath), match[3]));
                    const base64 = imageToBase64(imgFilename);
                    markdown = markdown.replace(match[1], `![${match[2]}](${base64})`);
                }
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(`Missing image ${match[3]} in ${docPath}`);
            }
        }
    } while (match);

    return markdown;
}

function imageToBase64(filename) {
    const imgData = fs.readFileSync(filename);

    const ext = /\.([0-9a-z]+)$/.exec(filename);

    return `data:image/${ext[1].toLowerCase()};base64,${imgData.toString('base64')}`;
}