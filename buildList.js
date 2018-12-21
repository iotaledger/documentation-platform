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
        listFiles(`${baseDir}/${dir}`).map(file => ({
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
            const docIndex = readFileSync(`${baseDir}/${name}/${version}/doc-index.md`).toString();

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
                        versions[version].push({
                            name: match[1],
                            link: `/${baseDir}/${name}/${version}/${sanitizedLink}`
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
