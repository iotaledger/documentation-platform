export const getNextPage = (projectUrlParts, data) => {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, projectUrlParts.projectVersion, data);
    if (projectIndex) {
        const currentIndex = projectIndex.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex >= 0 && currentIndex < projectIndex.length) {
            return projectIndex[currentIndex + 1];
        }
    }

    return undefined;
}

export const getPreviousPage = (projectUrlParts, data) => {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, projectUrlParts.projectVersion, data);
    if (projectIndex) {
        const currentIndex = projectIndex.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex > 0) {
            return projectIndex[currentIndex - 1];
        }
    }

    return undefined;
}

export function parseProjectUrl(projectFullURL) {
    ///docs/HUB/2.0/something/something/something

    const urlParts = projectFullURL.split('/');
    const projectName = urlParts[2];
    const projectVersion = urlParts[3];
    const projectDocParts = urlParts.slice(4);
    const projectDoc = projectDocParts.join("/");

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

export function createFloatingMenuEntries(homePageContent, data) {
    if (!data) {
        return [{ name: "New To IOTA?", link: "#new_to_iota?" }]
            .concat(homePageContent.map(entry => ({
                name: entry.header,
                link: `#${entry.header.toLowerCase().replace(/ /g, "_")}`
            })));
    } else {
        return [{ name: "New To IOTA?", link: "/" }]
            .concat(homePageContent.map(entry => {
                const latestVersion = getLatestVersion(entry.header, data);
                const projectIndex = getProjectIndex(entry.header, latestVersion, data);

                return {
                    name: entry.header,
                    link: projectIndex[0].link
                };
            }));
    }
}

export function createSideMenuEntries(data, projectFullURL) {
    const menuEntries = [];
    const projects = Object.keys(data);
    for (let i = 0; i < projects.length; i++) {
        const latestVersion = getLatestVersion(projects[i], data);
        if (latestVersion) {
            const projectIndex = getProjectIndex(projects[i], latestVersion, data);
            if (projectIndex) {
                const isChildActive = getIndexItem(projectIndex, projectFullURL, data) !== undefined;
                menuEntries.push({
                    heading: projects[i],
                    expanded: isChildActive,
                    selected: isChildActive,
                    items: buildItemTree(projectIndex, projectFullURL)
                });
            }
        }
    }
    return menuEntries;
}

export function buildItemTree(index, projectFullURL) {
    const tree = [];
    let inSection;

    for (let i = 0; i < index.length; i++) {
        const nameParts = index[i].name.split("/");
        if (nameParts.length === 1) {
            tree.push({
                type: "section-link",
                link: index[i].link,
                name: index[i].name,
                selected: index[i].link === projectFullURL
            })
            inSection = undefined;
        } else {
            const currentSection = inSection ? inSection.name : "";
            if (nameParts[0] !== currentSection) {
                inSection = {
                    type: "section-header",
                    name: nameParts[0],
                    items: [],
                    expanded: false
                }
                tree.push(inSection);
            }
            inSection.items.push({
                name: nameParts.slice(1).join("/"),
                link: index[i].link,
                selected: index[i].link === projectFullURL
            });
        }
    }

    return tree;
}


export function getLatestVersion(projectName, data) {
    return data[projectName] ? Object.keys(data[projectName].versions).slice(-1) : "";
}

export function getDocumentTitle(projectUrlParts, data) {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, projectUrlParts.projectVersion, data);
    const indexItem = getIndexItem(projectIndex, projectUrlParts.projectFullURL);
    return indexItem ? indexItem.name : "";
}

export function getProjectIndex(projectName, projectVersion, data) {
    return data[projectName] && data[projectName].versions ?
        data[projectName].versions[projectVersion] : undefined;
}

export function getIndexItem(projectIndex, itemUrl) {
    return projectIndex ? projectIndex.find(indexItem => indexItem.link === itemUrl) : undefined;
}

export function replaceVersion(projectUrlParts, newVersion, data) {
    const projectIndex = getProjectIndex(projectUrlParts.projectName, newVersion, data);
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