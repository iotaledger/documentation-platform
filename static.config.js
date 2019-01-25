import fs from 'fs';
import path from 'path';
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';
import projects from './projects.json';
import GoogleAnalytics from './src/components/atoms/GoogleAnalytics';
import HotJar from './src/components/atoms/HotJar';
import { googleAnalyticsId, hotJarId, siteName, siteRoot } from './src/config.json';

export default {
    siteRoot,
    getSiteData: () => ({
        projects,
        siteName
    }),
    getRoutes: () => [
        {
            path: '/',
            component: 'src/containers/Home'
        },
        ...getDocPages().map(page => ({
            path: page.path,
            component: 'src/containers/Doc',
            getData: async () => ({
                markdown: processMarkdown(page.markdownSrc),
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
                        <meta name="apple-mobile-web-app-title" content={siteName} />
                        <meta name="application-name" content={siteName} />
                        <meta name="msapplication-TileColor" content="#ffffff" />
                        <meta name="theme-color" content="#ffffff" />
                        {renderMeta.styleTags}
                        <title>{siteName}</title>
                    </Head>
                    <Body>
                        {children}
                        <HotJar id={hotJarId} />
                        <GoogleAnalytics id={googleAnalyticsId} />
                    </Body>
                </Html>
            );
        }
    }
};

function getDocPages() {
    const documents = [];

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        for (let j = 0; j < project.versions.length; j++) {
            const version = project.versions[j];

            for (let k = 0; k < version.pages.length; k++) {
                documents.push({
                    path: version.pages[k].link,
                    title: `${version.pages[k].name.split('/').reverse().join(' | ')} | ${project.name}`,
                    markdownSrc: `.${version.pages[k].link}.md`
                });
            }
        }
    }

    return documents;
}

function webifyPath(p) {
    return p.replace(/\\/g, '/');
}

function processMarkdown(markdownSrc) {
    let markdown = fs.readFileSync(markdownSrc).toString();
    markdown = assetMarkdownImage(markdown, markdownSrc);
    markdown = assetHtmlImage(markdown, markdownSrc);
    markdown = replaceRootUrls(markdown);
    return markdown;
}

function replaceRootUrls(markdown) {
    return markdown.replace(/root:\/\/(.*?)(.md)/g, '/docs/$1');
}

function assetHtmlImage(markdown, docPath) {
    const re = /(<img src="(.*?)")/gm;

    let match;
    do {
        match = re.exec(markdown);
        if (match && match.length === 3) {
            try {
                if (!match[2].startsWith('http') && match[2].length > 0) {
                    const imgFilename = path.resolve(path.join(path.dirname(docPath), match[2]));
                    markdown = markdown.replace(match[1], `<img src="/assets/${webifyPath(path.relative('.', imgFilename))}"`);
                }
            } catch (err) {
                // Do Nothing
            }
        }
    } while (match);

    return markdown;
}

function assetMarkdownImage(markdown, docPath) {
    const re = /(!\[(.*?)\]\((.*?)( ".*")?\))/gm;

    let match;
    do {
        match = re.exec(markdown);

        if (match && (match.length === 4 || match.length === 5)) {
            try {
                if (!match[3].startsWith('http') && match[3].length > 0) {
                    const imgFilename = path.resolve(path.join(path.dirname(docPath), match[3]));
                    markdown = markdown.replace(match[1], `![${match[2]}](/assets/${webifyPath(path.relative('.', imgFilename))})`);
                }
            } catch (err) {
                // Do Nothing
            }
        }
    } while (match);

    return markdown;
}
