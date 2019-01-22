const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const axios = require('axios');

const { rootFolder, reportFile, projectsFile, checkRemotePages, consoleDetail } = require('./buildProjects.config.json');

let errorCount = 0;

async function buildProjects(baseDir) {
    console.log('Building Projects');

    try {
        await fsPromises.unlink(reportFile);
    } catch (err) {
        // Do nothing
    }

    await reportEntry(`Built on: ${new Date().toISOString()}`);
    await reportEntry('');

    await reportEntry(`Reading Project Dir: '${baseDir}'`);
    await reportEntry('');

    const projects = await readProjects(baseDir);
    console.log(`Found ${projects.length} Projects.`);

    for (let i = 0; i < projects.length; i++) {
        if (consoleDetail) {
            console.log('');
            console.log('-'.repeat(projects[i].name.length));
            console.log(`${projects[i].name}`);
            console.log('-'.repeat(projects[i].name.length));
            console.log('');
        }

        await reportEntry('');
        await reportEntry(`\tProject: '${projects[i].name}'`);
        await reportEntry(`\tFolder: '${projects[i].folder}'`);

        await buildHome(baseDir, projects[i]);
        await buildVersions(baseDir, projects[i]);
    }

    return projects;
}

async function readProjects(baseDir) {
    const projectFileName = `${baseDir}/projects.md`;
    const projects = [];

    try {
        await reportEntry(`Reading Projects from file '${projectFileName}'`);

        const projectFile = (await fsPromises.readFile(projectFileName)).toString();

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
        await reportError(`Failed while trying to read the projects file '${projectFileName}'`, err);
    }

    return projects;
}

async function buildHome(baseDir, project) {
    const versions = [];
    const homeFile = `${baseDir}/${project.folder}/home.md`;

    try {
        if (fs.existsSync(homeFile)) {
            await reportEntry(`\tHome File: '${homeFile}'`);

            const home = (await fsPromises.readFile(homeFile)).toString();

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
        } else {
            await reportEntry(`\tHome File: '${homeFile}' does not exist, project will not show on home navigation`);
        }
    } catch (err) {
        await reportError(`Failed while trying to build the home content for '${project.folder}'`, err);
    }

    return versions;
}

async function buildVersions(baseDir, project) {
    const projectVersions = listDirs(`${baseDir}/${project.folder}/`);

    for (let i = 0; i < projectVersions.length; i++) {
        await reportEntry('');
        await reportEntry(`\t\tVersion: '${projectVersions[i]}'`);

        project.versions.push({
            version: projectVersions[i],
            pages: await buildSingleVersion(baseDir, project.folder, projectVersions[i])
        });
    }
}

async function buildSingleVersion(baseDir, projectFolder, version) {
    const versions = [];
    const docIndexFile = `${baseDir}/${projectFolder}/${version}/doc-index.md`;

    try {
        await reportEntry(`\t\tVersion Index: '${docIndexFile}'`);
        const docIndex = (await fsPromises.readFile(docIndexFile)).toString();

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
                    const toc = await extractTocAndValidateAssets(baseDir, projectFolder, version, match[2], docIndexFile);
                    versions.push({
                        name: match[1],
                        link: `/${baseDir}/${projectFolder}/${version}/${sanitizedLink}`,
                        toc
                    });
                }
            }
        } while (match);
    } catch (err) {
        await reportError(`Failed while trying to build the content for '${projectFolder}' v${version}`, err);
    }

    return versions;
}

async function extractTocAndValidateAssets(baseDir, projectFolder, version, doc, docIndexFile) {
    // Try and load the markdown for the page and if it exists extract
    // the headers to create a toc
    const toc = [];

    const docName = webifyPath(path.join(`${baseDir}/${projectFolder}/${version}/`, doc));

    try {
        if (fs.existsSync(docName)) {
            await reportEntry(`\t\t\tTOC: '${docName}'`);

            const doc = (await fsPromises.readFile(docName)).toString();

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

            toc.map(async t => await reportEntry(`\t\t\t\t${t.level}: ${t.name}`));

            await assetHtmlImage(doc, docName);
            await assetMarkdownImage(doc, docName);
            if (checkRemotePages) {
                await assetHtmlLink(doc, docName);
            }
        } else {
            await reportError(`'${docIndexFile}' referenced '${docName}' but the file does not exist`);
        }
    } catch (err) {
        await reportError(`'${docIndexFile}' referenced '${docName}' but building TOC failed`, err);
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

async function assetHtmlImage(markdown, docPath) {
    const re = /(<img src="(.*?)")/gm;

    let match;
    do {
        match = re.exec(markdown);
        if (match && match.length === 3) {
            if (match[2].startsWith('http')) {
                const response = await checkRemote(match[2]);
                if (!response) {
                    await reportEntry(`\t\t\tRemote Image: '${match[2]}'`);
                } else {
                    await reportError(`Remote image errors: '${match[2]}' in '${docPath}' with '${response}'`);
                }
            } else if (match[2].length > 0) {
                const imgFilename = path.resolve(path.join(path.dirname(docPath), match[2]));
                if (fs.existsSync(imgFilename)) {
                    await reportEntry(`\t\t\tLocal Image: '${match[2]}'`);
                } else {
                    await reportError(`Image file does not exist '${match[2]}' in '${docPath}'`);
                }
            } else {
                await reportError(`Invalid Image reference: ${match[0]} in '${docPath}'`);
            }
        }
    } while (match);
}

async function assetMarkdownImage(markdown, docPath) {
    const re = /(!\[(.*?)\]\((.*?)( ".*")?\))/gm;

    let match;
    do {
        match = re.exec(markdown);

        if (match && (match.length === 4 || match.length === 5)) {
            if (match[3].startsWith('http')) {
                const response = await checkRemote(match[3]);
                if (!response) {
                    await reportEntry(`\t\t\tRemote Image: '${match[3]}'`);
                } else {
                    await reportError(`Remote image errors: '${match[3]}' in '${docPath}' with '${response}'`);
                }
            } else if (match[3].length > 0) {
                const imgFilename = path.resolve(path.join(path.dirname(docPath), match[3]));
                if (fs.existsSync(imgFilename)) {
                    await reportEntry(`\t\t\tLocal Image: '${match[3]}'`);
                } else {
                    await reportError(`Image file does not exist '${match[3]}' in '${docPath}'`);
                }
            } else {
                await reportError(`Invalid Image reference: ${match[0]} in '${docPath}'`);
            }
        }
    } while (match);

    return markdown;
}

async function assetHtmlLink(markdown, docPath) {
    const re = /(?:!)?\[(.*?)\]\((.*?)\)/gm;

    let match;
    do {
        match = re.exec(markdown);

        if (match && match.length === 3) {
            if (match[2].startsWith('http')) {
                const response = await checkRemote(match[2]);
                if (!response) {
                    await reportEntry(`\t\t\tRemote Page: '${match[2]}'`);
                } else {
                    await reportError(`Remote page errors: '${match[2]}' in '${docPath}' with '${response}'`);
                }
            } else if (match[2].startsWith('root')) {
                let rootUrl = match[2].replace(/root:\/\/(.*?)(#.*)?/, '$1');
                const docFilename = path.resolve(path.join(rootFolder, rootUrl));
                if (!fs.existsSync(docFilename)) {
                    await reportError(`Root page does not exist '${match[2]}' in '${docPath}'`);
                }
            } else if (match[2].startsWith('#')) {
                // Anchor skip
            } else if (match[2].length > 0) {
                let localUrl = match[2].replace(/(.*?)(#.*)?/, '$1');
                const docFilename = path.resolve(path.join(path.dirname(docPath), localUrl));
                if (!fs.existsSync(docFilename)) {
                    await reportError(`Local page does not exist '${match[2]}' in '${docPath}'`);
                }
            } else {
                if (!match[0].startsWith('!')) { // Ignore images
                    await reportError(`Invalid html reference: ${match[0]} in '${docPath}'`);
                }
            }
        }
    } while (match);

    return markdown;
}

async function reportEntry(data) {
    await fsPromises.appendFile(reportFile, `${data}\n`);
}

async function reportError(data, err) {
    errorCount++;

    await fsPromises.appendFile(reportFile, `ERROR: ${data}\n`);

    if (consoleDetail) {
        console.error(`ERROR: ${data}`);
    }

    if (err) {
        await fsPromises.appendFile(reportFile, `ERROR: ${err.message}\n`);
    }
}

function webifyPath(p) {
    return p.replace(/\\/g, '/');
}

function listDirs(dir) {
    return fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());
}

function sanitizeLink(item) {
    return item
        .replace(/^\.?\//, '')
        .replace(/\.md$/i, '');
}

async function checkRemote(url) {
    try {
        await axios.head(url);
    } catch (err) {
        if (err.message.indexOf('404') >= 0) {
            return 'Not found';
        } else if (err.message.indexOf('409') < 0) {
            return err.message;
        }
    }
}

async function run() {
    const projects = await buildProjects(rootFolder);

    if (projectsFile) {
        await fsPromises.writeFile(projectsFile, JSON.stringify(projects, undefined, '\t'));
    }

    if (errorCount > 0) {
        console.error(`\nERROR: There were ${errorCount} errors found during project build, see ${reportFile} for details.`);
    }
}

run()
    .then('Done')
    .catch((err) => console.error(err));