const { existsSync, readdirSync, statSync, readFileSync } = require('fs');
const { join } = require('path');

const listDirs = dir => readdirSync(dir).filter(f => statSync(join(dir, f)).isDirectory());

const listFiles = dir => statSync(dir).isDirectory()
    ? Array.prototype.concat(...readdirSync(dir).map(f => listFiles(join(dir, f))))
    : dir;

const webifyPath = (p) => p.replace(/\\/g, '/');

const sanitizeLink = item => item
    .replace(/^\.?\//, '')
    .replace(/\.md$/i, '');

const getDocPages = baseDir => {
    const dirs = listDirs(baseDir);
    const files = Array.prototype.concat(...dirs.map(dir =>
        listFiles(`${baseDir}/${dir}`).filter(f => /.md$/i.test(f)).map(file => ({
            path: webifyPath(file).replace('.md', ''),
            title: `${webifyPath(dir)} ${webifyPath(file).replace(`docs/${webifyPath(dir)}/`, '').replace('.md', '')}`,
            markdownSrc: webifyPath(file)
        }))
    ));
    return files;
};

function buildProjects(baseDir) {
    const projects = readProjects(baseDir);

    for (let i = 0; i < projects.length; i++) {
        buildHome(baseDir, projects[i]);
        buildVersions(baseDir, projects[i]);
    }

    return projects;
}

function readProjects(baseDir) {
    const projectFileName = `${baseDir}/projects.md`;
    const projects = [];

    try {
        const projectFile = readFileSync(projectFileName).toString();

        const re = /\[(.*?)\]\((.*?)\)/g;

        let match;
        do {
            match = re.exec(projectFile);
            if (match && match.length === 3) {
                projects.push({
                    name: match[1],
                    folder: match[2].replace(/^\.?\//, ''),
                    versions: []
                });
            }
        } while (match);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Failed while trying to read the projects file ${projectFileName}`, err.message);
    }

    return projects;
}

function buildHome(baseDir, project) {
    const versions = [];
    const homeFile = `${baseDir}/${project.folder}/home.md`;

    try {
        if (existsSync(homeFile)) {
            const home = readFileSync(homeFile).toString();

            const descriptionMatch = /^# (.*)$/gm.exec(home);
            let description = '';
            if (descriptionMatch && descriptionMatch.length === 2) {
                description = descriptionMatch[1];
            }

            const re = /^\[(.*)\]\((.*)\)\s## (.*)$/gm;
            const links = [];

            let match;
            do {
                match = re.exec(home);
                if (match && match.length === 4) {
                    links.push({
                        name: match[1],
                        link: match[2].startsWith('http') ? match[2] : `/${baseDir}/${project.folder}/${sanitizeLink(match[2])}`,
                        description: match[3].replace(/root:\/\//g, `/${baseDir}/`)
                    });
                }
            } while (match);

            project.home = {
                description,
                links
            };
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Failed while trying to build the home content for ${project.folder}`, err.message);
    }

    return versions;
}

function buildVersions(baseDir, project) {
    const projectVersions = listDirs(`${baseDir}/${project.folder}/`);

    for (let i = 0; i < projectVersions.length; i++) {
        project.versions.push({
            version: projectVersions[i],
            pages: buildSingleVersion(baseDir, project.folder, projectVersions[i])
        });
    }
}

function buildSingleVersion(baseDir, projectFolder, version) {
    const versions = [];
    const docIndexFile = `${baseDir}/${projectFolder}/${version}/doc-index.md`;

    try {
        const docIndex = readFileSync(docIndexFile).toString();

        const re = /\[(.*)\]\((.*)\)/g;

        let match;
        do {
            match = re.exec(docIndex);
            if (match && match.length === 3) {
                const sanitizedLink = sanitizeLink(match[2]);
                if (sanitizedLink.startsWith('root://')) {
                    versions.push({
                        name: match[1],
                        link: `/${baseDir}/${sanitizedLink.replace('root://', '')}`
                    });
                } else {
                    versions.push({
                        name: match[1],
                        link: `/${baseDir}/${projectFolder}/${version}/${sanitizedLink}`,
                        toc: extractToc(baseDir, projectFolder, version, match[2], docIndexFile)
                    });
                }
            }
        } while (match);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Failed while trying to build the content for ${projectFolder} v${version}`, err.message);
    }

    return versions;
}

function extractToc(baseDir, projectFolder, version, doc, docIndexFile) {
    // Try and load the markdown for the page and if it exists extract
    // the headers to create a toc
    const toc = [];

    const docName = webifyPath(join(`${baseDir}/${projectFolder}/${version}/`, doc));

    try {
        const doc = readFileSync(docName).toString();

        // Match all headers e.g.
        // # Blah blah
        // ## Blah blah
        // But not those ending in # which are our custom styles
        // ## LABEL ##

        const reHeaders = /^(#+)(.*?)(?<!#)$/gm;
        let matchHeader;

        do {
            matchHeader = reHeaders.exec(doc);
            if (matchHeader && matchHeader.length === 3) {
                toc.push({
                    level: matchHeader[1].length,
                    name: extractContent(matchHeader[2])
                });
            }
        } while (matchHeader);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`${docIndexFile} referenced ${docName} but building TOC failed`, err.message);
    }

    return toc;
}

function extractContent(markdown) {
    // The header might be contain a link so we need to extract
    // the actual label
    // e.g. [**`mylabel`**](https://someplace)
    let content = markdown.trim();

    const reLink = /^(?:\[)(.*?)(?:\])\(.*\)/;

    const match = reLink.exec(content);
    if (match && match.length === 2) {
        // Found a link so just extract the content
        content = match[1];
    }

    // Now remove any additional formatting like bold, italic, inline
    content = stripWrapper(content, '\\*\\*');
    content = stripWrapper(content, '\\*');
    content = stripWrapper(content, '__');
    content = stripWrapper(content, '_');
    content = stripWrapper(content, '`');

    return content;
}

function stripWrapper(markdown, wrapper) {
    // If the content is wrappedin the marker then remove it
    // e.g. **my label**
    const reWrapper = new RegExp(`(${wrapper})(.+?)(${wrapper})`);

    const match = reWrapper.exec(markdown);
    if (match && match.length === 4) {
        markdown = match[2];
    }

    return markdown;
}

module.exports = {
    getDocPages,
    buildProjects
};
