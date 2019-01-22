const fs = require('fs');
const path = require('path');
    
const webifyPath = (p) => p.replace(/\\/g, '/');

const listDirs = dir => fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

const sanitizeLink = item => item
    .replace(/^\.?\//, '')
    .replace(/\.md$/i, '');

const reportFile = 'projects-summary.log';
let errorCount = 0;

function buildProjects(baseDir) {
    try {
        fs.unlinkSync(reportFile);
    } catch (err) {
        // Do nothing
    }

    reportEntry(`Built on: ${new Date().toISOString()}`);
    reportEntry('');

    reportEntry(`Reading Project Dir: '${baseDir}'`);
    reportEntry('');

    const projects = readProjects(baseDir);

    for (let i = 0; i < projects.length; i++) {
        reportEntry('');
        reportEntry(`\tProject: '${projects[i].name}'`);
        reportEntry(`\tFolder: '${projects[i].folder}'`);

        buildHome(baseDir, projects[i]);
        buildVersions(baseDir, projects[i]);
    }

    return projects;
}

function readProjects(baseDir) {
    const projectFileName = `${baseDir}/projects.md`;
    const projects = [];

    try {
        reportEntry(`Reading Projects from file '${projectFileName}'`);

        const projectFile = fs.readFileSync(projectFileName).toString();

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
        reportError(`Failed while trying to read the projects file '${projectFileName}'`, err);
    }

    return projects;
}

function buildHome(baseDir, project) {
    const versions = [];
    const homeFile = `${baseDir}/${project.folder}/home.md`;

    try {
        if (fs.existsSync(homeFile)) {
            reportEntry(`\tHome File: '${homeFile}'`);

            const home = fs.readFileSync(homeFile).toString();

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
            reportEntry(`\tHome File: '${homeFile}' does not exist, project will not show on home navigation`);
        }
    } catch (err) {
        reportError(`Failed while trying to build the home content for '${project.folder}'`, err);
    }

    return versions;
}

function buildVersions(baseDir, project) {
    const projectVersions = listDirs(`${baseDir}/${project.folder}/`);

    for (let i = 0; i < projectVersions.length; i++) {
        reportEntry('');
        reportEntry(`\t\tVersion: '${projectVersions[i]}'`);

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
        reportEntry(`\t\tVersion Index: '${docIndexFile}'`);
        const docIndex = fs.readFileSync(docIndexFile).toString();

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
                        toc: extractTocAndValidateAssets(baseDir, projectFolder, version, match[2], docIndexFile)
                    });
                }
            }
        } while (match);
    } catch (err) {
        reportError(`Failed while trying to build the content for '${projectFolder}' v${version}`, err);
    }

    return versions;
}

function extractTocAndValidateAssets(baseDir, projectFolder, version, doc, docIndexFile) {
    // Try and load the markdown for the page and if it exists extract
    // the headers to create a toc
    const toc = [];

    const docName = webifyPath(path.join(`${baseDir}/${projectFolder}/${version}/`, doc));

    try {
        if (fs.existsSync(docName)) {
            reportEntry(`\t\t\tTOC: '${docName}'`);

            const doc = fs.readFileSync(docName).toString();

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

            toc.map(t => reportEntry(`\t\t\t\t${t.level}: ${t.name}`));

            assetHtmlImage(doc, docName);
            assetMarkdownImage(doc, docName);
        } else {
            reportError(`'${docIndexFile}' referenced '${docName}' but the file does not exist`);
        }
    } catch (err) {
        reportError(`'${docIndexFile}' referenced '${docName}' but building TOC failed`, err);
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

function assetHtmlImage(markdown, docPath) {
    const re = /(<img src="(.*?)")/gm;

    let match;
    do {
        match = re.exec(markdown);
        if (match && match.length === 3) {
            if (match[2].startsWith('http')) {
                reportEntry(`\t\t\tRemote Image: '${match[1]}'`);
            } else if (match[2].length > 0) {
                const imgFilename = path.resolve(path.join(path.dirname(docPath), match[2]));
                if (fs.existsSync(imgFilename)) {
                    reportEntry(`\t\t\tLocal Image: '${match[2]}'`);
                } else {
                    reportError(`Image file does not exist '${match[2]}' in ${docPath}`);
                }
            } else {
                reportError(`Invalid Image reference: ${match[0]} in ${docPath}`);
            }
        }
    } while (match);
}

function assetMarkdownImage(markdown, docPath) {
    const re = /(!\[(.*?)\]\((.*?)("(.*)")?\))/gm;

    let match;
    do {
        match = re.exec(markdown);

        if (match && (match.length === 4 || match.length === 5)) {
            if (match[3].startsWith('http')) {
                reportEntry(`\t\t\tRemote Image: '${match[3]}'`);
            } else if (match[3].length > 0) {
                const imgFilename = path.resolve(path.join(path.dirname(docPath), match[3]));
                if (fs.existsSync(imgFilename)) {
                    reportEntry(`\t\t\tLocal Image: '${match[3]}'`);
                } else {
                    reportError(`Image file does not exist '${match[2]}' in ${docPath}`);
                }
            } else {
                reportError(`Invalid Image reference: ${match[0]} in ${docPath}`);
            }
        }
    } while (match);

    return markdown;
}

function reportEntry(data) {
    fs.appendFileSync(reportFile, `${data}\n`);
}

function reportError(data, err) {
    errorCount++;

    fs.appendFileSync(reportFile, `ERROR: ${data}\n`);

    if (err) {
        fs.appendFileSync(reportFile, `ERROR: ${err.message}\n`);
    }
}

const projects = buildProjects('docs');

fs.writeFileSync('projects.json', JSON.stringify(projects, undefined, '\t'));

if (errorCount > 0) {
    // eslint-disable-next-line no-console
    console.error(`ERROR: There were ${errorCount} errors found during project build, see ${reportFile} for details.`);
}