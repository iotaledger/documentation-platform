import fs from 'fs';
import path from 'path';
import React, { Component } from 'react';
import projects from './projects.json';
import GoogleAnalytics from './src/components/atoms/GoogleAnalytics';
import HotJar from './src/components/atoms/HotJar';

const configId = process.env.CONFIG_ID || 'local';
const config = require(`./src/config.${configId}.json`);

const homeData = require('./docs/site-settings/home.json');
if (homeData.cards) {
    for (let i = 0; i < homeData.cards.length; i++) {
        homeData.cards[i].image = `../../../assets/docs/site-settings/${homeData.cards[i].image}`;
    }
}

const footerData = require('./docs/site-settings/footer.json');
const viewData = require('./docs/site-settings/view.json');

let staticHome;
if (fs.existsSync('./docs/site-settings/home.html')) {
    staticHome = fs.readFileSync('./docs/site-settings/home.html').toString();
}

export default {
    siteRoot: config.siteRoot,
    getSiteData: () => ({
        projects,
        ...config,
        homeData,
        footerData,
        viewData,
        staticHome
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
        ...getRootPages().map(page => ({
            path: `/${page.folder}`,
            redirect: page.root
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
    Document: class CustomHtml extends Component {
        render() {
            const { Html, Head, Body, children } = this.props;

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
                        <meta name="apple-mobile-web-app-title" content={viewData.siteName} />
                        <meta name="application-name" content={viewData.siteName} />
                        <meta name="msapplication-TileColor" content="#ffffff" />
                        <meta name="theme-color" content="#ffffff" />
                        <title>{viewData.siteName}</title>
                    </Head>
                    <Body>
                        {children}
                        <HotJar id={config.hotJarId} />
                        <GoogleAnalytics id={config.googleAnalyticsId} />
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
                if (!version.pages[k].link.startsWith('http')) {
                    documents.push({
                        path: version.pages[k].link,
                        title: `${version.pages[k].name.split('/').reverse().join(' | ')} | ${project.name}`,
                        markdownSrc: `.${version.pages[k].link}.md`
                    });
                }
            }
        }
    }

    return documents;
}

function getRootPages() {
    const roots = [];

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        if (project.versions.length > 0) {
            const version = project.versions[project.versions.length - 1];

            if (version.pages && version.pages.length > 0) {
                roots.push({
                    folder: project.folder,
                    root: version.pages[0].link.replace(/^\//, '')
                });
            }
        }
    }

    return roots;
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
