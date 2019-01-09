const { readdirSync, statSync, readFileSync } = require('fs');
const { join } = require('path');

const getProjects = dir => readdirSync(dir).filter(f => statSync(join(dir, f)).isDirectory());

const listFiles = dir => statSync(dir).isDirectory()
    ? Array.prototype.concat(...readdirSync(dir).map(f => listFiles(join(dir, f))))
    : dir;

const webifyPath = (p) => p.replace(/\\/g, '/');

const getDocPages = baseDir => {
    const dirs = getProjects(baseDir);
    const files = Array.prototype.concat(...dirs.map(dir =>
        listFiles(`${baseDir}/${dir}`).filter(f => /.md$/i.test(f)).map(file => ({
            path: webifyPath(file).replace('.md', ''),
            title: `${webifyPath(dir)} ${webifyPath(file).replace(`docs/${webifyPath(dir)}/`, '').replace('.md', '')}`,
            markdownSrc: webifyPath(file)
        }))
    ));
    return files;
};

const buildMenuItems = baseDir => {
    const projects = getProjects(baseDir);
    const menu = {};
    projects.forEach(name => {
        const versions = {};

        const projectVersions = getProjects(`${baseDir}/${name}/`);

        projectVersions.forEach(version => {
            const docIndexFile = `${baseDir}/${name}/${version}/doc-index.md`;
            const docIndex = readFileSync(docIndexFile).toString();

            versions[version] = [];

            const re = /\[(.*)\]\((.*)\)/g;

            let match;
            do {
                match = re.exec(docIndex);
                if (match && match.length === 3) {
                    const sanitizedLink = match[2]
                        .replace(/^\.?\//, '')
                        .replace(/\.md$/i, '');
                    if (sanitizedLink.startsWith('root://')) {
                        versions[version].push({
                            name: match[1],
                            link: `/${baseDir}/${sanitizedLink.replace('root://', '')}`
                        });
                    } else {
                        // Try and load the markdown for the page and if it exists extract
                        // the headers to create a toc
                        const toc = [];
                        const docName = webifyPath(join(`${baseDir}/${name}/${version}/`, match[2]));
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
                                        content: matchHeader[2]
                                    });
                                }
                            } while (matchHeader);
                        } catch(err) {
                            console.error(`${docIndexFile} referenced ${docName} but could not read the file to create TOC`);
                        }

                        versions[version].push({
                            name: match[1],
                            link: `/${baseDir}/${name}/${version}/${sanitizedLink}`,
                            toc
                        });
                    }
                }
            } while (match);
        });

        menu[name] = { name, versions };
    });
    return menu;
};

module.exports = {
    getDocPages,
    buildMenuItems
};
