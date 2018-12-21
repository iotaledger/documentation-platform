import { reloadRoutes } from 'react-static/node';
import fs from 'fs-extra';
import path from 'path';
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';
import chokidar from 'chokidar';
import { getDocPages, buildMenuItems } from './buildList';
import { siteRoot } from './src/config.json';

chokidar.watch('../docs').on('all', () => reloadRoutes());

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
const docPages = getDocPages('docs');

// This is the side menu for the documentation section.
// You can nest items in `children` to create groups.
// If a group name has a `link` prop, it will also act as a link in addition to a header.
const menu = buildMenuItems('docs');

const readFile = src => fs.readFileSync(path.resolve(src), 'utf8');

const fixReprismSyntaxHighlighting = content => content
    .replace(/```Python/g, '```python')
    .replace(/```c\+\+/g, '```cpp')
    .replace(/```proto/g, '```cpp');

// No need to touch any of this, unless you want to.
export default {
    siteRoot,
    getSiteData: () => ({
        menu,
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
                markdown: fixReprismSyntaxHighlighting(await readFile(page.markdownSrc)),
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
                    <Body>{children}</Body>
                </Html>
            );
        }
    }
};
