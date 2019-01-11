export const getNextPage = (projectUrlParts, menuData) => {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, projectUrlParts.projectVersion, menuData);
    if (projectIndex) {
        const currentIndex = projectIndex.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex >= 0 && currentIndex < projectIndex.length) {
            return projectIndex[currentIndex + 1];
        }
    }

    return undefined;
};

export const getPreviousPage = (projectUrlParts, menuData) => {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, projectUrlParts.projectVersion, menuData);
    if (projectIndex) {
        const currentIndex = projectIndex.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex > 0) {
            return projectIndex[currentIndex - 1];
        }
    }

    return undefined;
};

export function parseProjectUrl(projectFullURL) {
    ///docs/HUB/2.0/something/something/something

    const urlParts = projectFullURL.split('/');
    const projectName = urlParts[2];
    const projectVersion = urlParts[3];
    const projectDocParts = urlParts.slice(4);
    const projectDoc = projectDocParts.join('/');

    return {
        projectFullURL,
        projectName,
        projectVersion,
        projectDocParts,
        projectDoc,
        projectDocTitle: projectDocParts[projectDocParts.length - 1]
    };
}

export function combineProjectUrl(projectParts) {
    ///docs/HUB/2.0/something/something/something
    return `/docs/${projectParts.projectName}/${projectParts.projectVersion}/${projectParts.projectDoc}`;
}

export function getLatestVersionLinks(menuData) {
    const projectNames = Object.keys(menuData);
    const latestVersionLinks = {};

    for (let i = 0; i < projectNames.length; i++) {
        const latestVersion = getLatestVersion(projectNames[i], menuData);
        const projectIndex = getProjectIndex(projectNames[i], latestVersion, menuData);

        latestVersionLinks[projectNames[i]] = projectIndex[0].link;
    }

    return latestVersionLinks;
}

export function createDropSelectorEntries(contentHomePage, menuData) {
    const latestVersionLinks = getLatestVersionLinks(menuData);

    return contentHomePage.content.map(entry => {
        return {
            title: entry.header,
            value: latestVersionLinks[entry.folder]
        };
    });
}

export function createFloatingMenuEntries(contentHomePage, menuData) {
    const latestVersionLinks = getLatestVersionLinks(menuData);

    return [{ name: 'New To IOTA?', link: '/' }]
        .concat(contentHomePage.map(entry => {
            return {
                name: entry.header,
                folder: entry.folder,
                link: latestVersionLinks[entry.folder]
            };
        }));
}

export function createSideMenuEntries(contentHomePage, menuData, projectFullURL) {
    const menuEntries = [];

    for (let i = 0; i < contentHomePage.content.length; i++) {
        const header = contentHomePage.content[i].header;
        const folder = contentHomePage.content[i].folder;
        const latestVersion = getLatestVersion(folder, menuData);
        if (latestVersion) {
            const projectIndex = getProjectIndex(folder, latestVersion, menuData);
            if (projectIndex) {
                const isChildActive = getIndexItem(projectIndex, projectFullURL, menuData) !== undefined;
                menuEntries.push({
                    heading: header,
                    expanded: isChildActive,
                    selected: isChildActive,
                    items: buildItemTree(projectIndex, projectFullURL)
                });
            }
        }
    }
    return menuEntries;
}

export function buildItemTree(projectIndex, projectFullURL) {
    const tree = [];
    let inSection;

    for (let i = 0; i < projectIndex.length; i++) {
        const nameParts = projectIndex[i].name.split('/');
        if (nameParts.length === 1) {
            tree.push({
                type: 'section-link',
                link: projectIndex[i].link,
                name: projectIndex[i].name,
                selected: projectIndex[i].link === projectFullURL
            });
            inSection = undefined;
        } else {
            const currentSection = inSection ? inSection.name : '';
            if (nameParts[0] !== currentSection) {
                inSection = {
                    type: 'section-header',
                    name: nameParts[0],
                    items: [],
                    expanded: false
                };
                tree.push(inSection);
            }
            inSection.items.push({
                name: nameParts.slice(1).join('/'),
                link: projectIndex[i].link,
                selected: projectIndex[i].link === projectFullURL
            });
            if (projectIndex[i].link === projectFullURL) {
                inSection.selected = true;
            }
        }
    }

    return tree;
}

export function getVersions(projectName, menuData) {
    return menuData[projectName] ? Object.keys(Object.keys(menuData[projectName].versions)) : [];
}

export function getLatestVersion(projectName, menuData) {
    return menuData[projectName] ? Object.keys(menuData[projectName].versions).slice(-1) : '';
}

export function getProjectTitle(projectUrlParts, contentHomePage) {
    let projName = projectUrlParts.projectName;

    const content = contentHomePage.content.find(c => c.folder === projName);

    if (content) {
        projName = content.header;
    }

    return projName;
}

export function getDocumentTitle(projectUrlParts, menuData) {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, projectUrlParts.projectVersion, menuData);
    const indexItem = getIndexItem(projectIndex, projectUrlParts.projectFullURL);
    let docTitle;
    if (indexItem) {
        if (indexItem.toc) {
            const h1 = indexItem.toc.find(docHeader => docHeader.level === 1);
            if (h1) {
                docTitle = h1.content;
            }
        }
    }
    if (!docTitle) {
        docTitle = projectUrlParts.projectDocTitle;
    }
    return docTitle;
}

export function getProjectIndex(projectName, projectVersion, menuData) {
    return menuData[projectName] && menuData[projectName].versions ?
        menuData[projectName].versions[projectVersion] : undefined;
}

export function getIndexItem(projectIndex, itemUrl) {
    return projectIndex ? projectIndex.find(indexItem => indexItem.link === itemUrl) : undefined;
}

export function replaceVersion(projectUrlParts, newVersion, menuData) {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, newVersion, menuData);
    if (projectIndex) {
        const newUrl = combineProjectUrl(projectUrlParts);

        // If there is not an equivalent document in the new version of the documentation
        // the just return the first page for the new version
        const foundIndex = projectIndex.findIndex(indexItem => indexItem.link === newUrl);
        if (foundIndex >= 0) {
            return newUrl;
        } else {
            return projectIndex[0].link;
        }
    }
}