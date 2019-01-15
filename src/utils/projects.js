import { sanitizeHashId } from './paths';

export function parseProjectUrl(projectFullURL) {
    ///docs/hub/2.0/something/something/something

    const urlParts = projectFullURL.split('/');
    const projectFolder = urlParts[2];
    const projectVersion = urlParts[3];
    const projectDocParts = urlParts.slice(4);
    const projectDoc = projectDocParts.join('/');

    return {
        projectFullURL,
        projectFolder,
        projectVersion,
        projectDocParts,
        projectDoc,
        projectDocTitle: projectDocParts[projectDocParts.length - 1]
    };
}

export function combineProjectUrl(projectParts) {
    ///docs/hub/2.0/something/something/something
    return `/docs/${projectParts.projectFolder}/${projectParts.projectVersion}/${projectParts.projectDoc}`;
}

export function createPageTableOfContents(projectUrlParts, projects) {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    let toc = [
        { name: 'Introduction', link: '#root' }
    ];

    if (projectVersionPages) {
        const currentIndex = projectVersionPages.find(indexItem => indexItem.link === projectUrlParts.projectFullURL);

        if (currentIndex && currentIndex.toc) {
            toc = toc.concat(currentIndex.toc
                .filter(item => item.level > 1)
                .map(item => ({ name: item.name, link: `#${sanitizeHashId(item.name)}` })));
        }
    }

    return toc;
}

export function createProjectLinks(projects, nameProp, valueProp) {
    const menuEntries = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            const latestVersion = getLatestVersion(projects[i]);
            const projectVersionPages = getProjectVersionPages(projects[i], latestVersion);

            const me = {
                folder: projects[i].folder
            };

            me[nameProp || 'name'] = projects[i].name;
            me[valueProp || 'link'] = projectVersionPages[0].link;

            menuEntries.push(me);
        }
    }

    return menuEntries;
}

export function createProjectTopics(projects) {
    const projectTopics = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            projectTopics.push({ name: projects[i].name, ...projects[i].home });
        }
    }

    return projectTopics;
}

export function createSideMenuEntries(projects, projectFullURL) {
    const menuEntries = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            const latestVersion = getLatestVersion(projects[i]);
            if (latestVersion) {
                const projectVersionPages = getProjectVersionPages(projects[i], latestVersion);
                if (projectVersionPages) {
                    const isChildActive = getPage(projectVersionPages, projectFullURL) !== undefined;
                    menuEntries.push({
                        name: projects[i].name,
                        expanded: isChildActive,
                        selected: isChildActive,
                        items: buildItemTree(projectVersionPages, projectFullURL)
                    });
                }
            }
        }
    }
    return menuEntries;
}

export function buildItemTree(projectVersionPages, projectFullURL) {
    const tree = [];
    let inSection;

    for (let i = 0; i < projectVersionPages.length; i++) {
        const nameParts = projectVersionPages[i].name.split('/');
        if (nameParts.length === 1) {
            tree.push({
                type: 'section-link',
                link: projectVersionPages[i].link,
                name: projectVersionPages[i].name,
                selected: projectVersionPages[i].link === projectFullURL
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
                link: projectVersionPages[i].link,
                selected: projectVersionPages[i].link === projectFullURL
            });
            if (projectVersionPages[i].link === projectFullURL) {
                inSection.selected = true;
            }
        }
    }

    return tree;
}

export function lookupProject(projectUrlParts, projects) {
    return projects.find(p => p.folder === projectUrlParts.projectFolder);
}

export function getVersionsUrl(projectUrlParts, projects) {
    const project = lookupProject(projectUrlParts, projects);
    return project && project.versions ? project.versions.map(pv => pv.version) : [];
}

export function getLatestVersion(project) {
    return project && project.versions && project.versions.length > 0 ? project.versions[project.versions.length - 1].version : '';
}

export function getProjectTitle(projectUrlParts, projects) {
    const project = lookupProject(projectUrlParts, projects);

    return project ? project.name : projectUrlParts.projectFolder;
}

export function getDocumentTitle(projectUrlParts, projects) {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    const indexItem = getPage(projectVersionPages, projectUrlParts.projectFullURL);
    let docTitle;
    if (indexItem) {
        if (indexItem.toc) {
            const h1 = indexItem.toc.find(docHeader => docHeader.level === 1);
            if (h1) {
                docTitle = h1.name;
            }
        }
    }
    if (!docTitle) {
        docTitle = projectUrlParts.projectDocTitle;
    }
    return docTitle;
}

export function getProjectVersionPagesUrl(projectPartsUrlPart, projectVersion, projects) {
    return getProjectVersionPages(lookupProject(projectPartsUrlPart, projects), projectVersion);
}


export function getProjectVersionPages(project, projectVersion) {
    if (project && project.versions) {
        const version = project.versions.find(pv => pv.version === projectVersion);

        if (version) {
            return version.pages;
        }
    }
}

export function getPage(versionPages, itemUrl) {
    return versionPages ? versionPages.find(indexItem => indexItem.link === itemUrl) : undefined;
}

export function replaceVersion(projectUrlParts, newVersion, projects) {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, newVersion);
    if (projectVersionPages) {
        const newUrl = combineProjectUrl(projectUrlParts);

        // If there is not an equivalent document in the new version of the documentation
        // the just return the first page for the new version
        const foundIndex = projectVersionPages.findIndex(indexItem => indexItem.link === newUrl);
        if (foundIndex >= 0) {
            return newUrl;
        } else {
            return projectVersionPages[0].link;
        }
    }
}

export const getNextPage = (projectUrlParts, projects) => {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    if (projectVersionPages) {
        const currentIndex = projectVersionPages.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex >= 0 && currentIndex < projectVersionPages.length) {
            return projectVersionPages[currentIndex + 1];
        }
    }

    return undefined;
};

export const getPreviousPage = (projectUrlParts, projects) => {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    if (projectVersionPages) {
        const currentIndex = projectVersionPages.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex > 0) {
            return projectVersionPages[currentIndex - 1];
        }
    }

    return undefined;
};
