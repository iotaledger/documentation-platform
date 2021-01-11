import { IProject } from "../models/IProject";
import { IProjectHome } from "../models/IProjectHome";
import { IProjectLink } from "../models/IProjectLink";
import { IProjectUrl } from "../models/IProjectUrl";
import { IProjectVersionPage } from "../models/IProjectVersionPage";
import { ISideMenuEntry } from "../models/ISideMenuEntry";
import { ITableOfContentsItem } from "../models/ITableOfContentsItem";
import { ITreeMenuEntry } from "../models/ITreeMenuEntry";
import { sanitizeHashId } from "./paths";

/**
 * Parse the url into its parts.
 * @param projectFullURL The full url.
 * @returns The parts.
 */
export function parseProjectUrl(projectFullURL: string): IProjectUrl {
    // /docs/hub/2.0/something/something/something

    const urlParts = projectFullURL.split("/");
    const projectFolder = urlParts[2];
    const projectVersion = urlParts[3];
    const projectDocParts = urlParts.slice(4);
    const projectDoc = projectDocParts.join("/");

    return {
        projectFullURL,
        projectFolder,
        projectVersion,
        projectDocParts,
        projectDoc,
        projectDocTitle: projectDocParts[projectDocParts.length - 1]
    };
}

/**
 * Combine the parts of a project url.
 * @param projectParts The project parts to combine.
 * @returns The combined url.
 */
export function combineProjectUrl(projectParts: IProjectUrl): string {
    // /docs/hub/2.0/something/something/something
    return `/docs/${projectParts.projectFolder}/${projectParts.projectVersion}/${projectParts.projectDoc}`;
}

/**
 * Create the table of contents for a project.
 * @param projectUrlParts The project url parts.
 * @param projects The projects.
 * @returns The table of contents items.
 */
export function createPageTableOfContents(projectUrlParts: IProjectUrl, projects: IProject[]): ITableOfContentsItem[] {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    let toc: ITableOfContentsItem[] = [{ name: "Introduction", link: "#root" }];

    if (projectVersionPages) {
        const currentIndex = projectVersionPages.find(indexItem => indexItem.link === projectUrlParts.projectFullURL);

        if (currentIndex?.toc) {
            toc = toc.concat(currentIndex.toc
                .filter(item => item.level > 1)
                .map(item => ({
                    name: item.name,
                    link: `#${sanitizeHashId(item.name, false, true)}`,
                    level: item.level
                })));
        }
    }

    return toc;
}

/**
 * Create all the links for the projects.
 * @param projects The projects to create the links for.
 * @returns The project links.
 */
export function createProjectLinks(projects: IProject[]): IProjectLink[] {
    const menuEntries = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            const latestVersion = getLatestVersion(projects[i]);
            const projectVersionPages = getProjectVersionPages(projects[i], latestVersion);

            const me = {
                folder: projects[i].folder,
                name: projects[i].name,
                link: projectVersionPages[0].link
            };

            menuEntries.push(me);
        }
    }

    return menuEntries;
}

/**
 * Create the project topics.
 * @param projects The project to create the topics for.
 * @returns The project topics.
 */
export function createProjectTopics(projects: IProject[]): ({ name: string } & IProjectHome)[] {
    const projectTopics: ({ name: string } & IProjectHome)[] = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            projectTopics.push({
                name: projects[i].name,
                ...projects[i].home
            });
        }
    }

    return projectTopics;
}

/**
 * Create the entries for the side menu.
 * @param projects The project to create the side menu for.
 * @param currentFullURL The current project url to highlighte.
 * @returns The side menu entries.
 */
export function createSideMenuEntries(projects: IProject[], currentFullURL: string): ISideMenuEntry[] {
    const menuEntries: ISideMenuEntry[] = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            const latestVersion = getLatestVersion(projects[i]);
            if (latestVersion) {
                const projectVersionPages = getProjectVersionPages(projects[i], latestVersion);
                if (projectVersionPages) {
                    const isChildActive = getPage(projectVersionPages, currentFullURL) !== undefined;
                    menuEntries.push({
                        name: projects[i].name,
                        expanded: isChildActive,
                        selected: isChildActive,
                        items: buildItemTree(projectVersionPages, currentFullURL)
                    });
                }
            }
        }
    }
    return menuEntries;
}

/**
 * Build the tree for navigation.
 * @param projectVersionPages The version page to create.
 * @param currentFullURL The current url to highlight.
 * @returns The tree menu entries.
 */
export function buildItemTree(
    projectVersionPages: IProjectVersionPage[], currentFullURL: string): ITreeMenuEntry[] {
    if (!projectVersionPages) {
        return [];
    }

    const tree: ITreeMenuEntry[] = [];
    let inSection: ITreeMenuEntry;
    let inSectionSub: ITreeMenuEntry;

    for (let i = 0; i < projectVersionPages.length; i++) {
        const nameParts = projectVersionPages[i].name.split("/");
        if (nameParts.length === 1) {
            tree.push({
                type: "section-link",
                link: projectVersionPages[i].link,
                name: projectVersionPages[i].name,
                selected: projectVersionPages[i].link === currentFullURL
            });
            inSection = undefined;
            inSectionSub = undefined;
        } else {
            const currentSection: string = inSection ? inSection.name : "";
            if (nameParts[0] !== currentSection) {
                inSection = {
                    type: "section-header",
                    name: nameParts[0],
                    items: [],
                    expanded: false
                };
                tree.push(inSection);
                inSectionSub = undefined;
            }
            if (projectVersionPages[i].link === currentFullURL) {
                inSection.selected = true;
            }

            if (nameParts.length === 2) {
                inSection.items.push({
                    type: "section-header-item",
                    name: nameParts.slice(1).join("/"),
                    link: projectVersionPages[i].link,
                    selected: projectVersionPages[i].link === currentFullURL
                });
            } else {
                const currentSectionSub = inSectionSub ? inSectionSub.name : "";
                if (nameParts[1] !== currentSectionSub) {
                    inSectionSub = {
                        type: "section-header-sub",
                        name: nameParts[1],
                        items: [],
                        expanded: false
                    };
                    inSection.items.push(inSectionSub);
                }
                if (projectVersionPages[i].link === currentFullURL) {
                    inSectionSub.selected = true;
                }
                inSectionSub.items.push({
                    name: nameParts.slice(2).join("/"),
                    link: projectVersionPages[i].link,
                    selected: projectVersionPages[i].link === currentFullURL
                });
            }
        }
    }

    return tree;
}

/**
 * Find a project using its folder.
 * @param projectUrlParts The url parts.
 * @param projects The project to lookup in.
 * @returns The found project.
 */
export function lookupProject(projectUrlParts: IProjectUrl, projects: IProject[]): IProject | undefined {
    return projects.find(p => p.folder === projectUrlParts.projectFolder);
}

/**
 * Get the version urls for the project.
 * @param projectUrlParts The url parts.
 * @param projects All the projects.
 * @returns The version with the newest version first.
 */
export function getVersionsUrl(projectUrlParts: IProjectUrl, projects: IProject[]): string[] {
    const project = lookupProject(projectUrlParts, projects);
    return project?.versions ? project.versions.map(pv => pv.version) : [];
}

/**
 * Gt the most recent version of the project.
 * @param project The project data.
 * @returns The most recent version.
 */
export function getLatestVersion(project: IProject): string {
    return project?.versions && project.versions.length > 0
        ? project.versions[project.versions.length - 1].version
        : "";
}

/**
 * The the title of the project.
 * @param projectUrlParts The project url parts.
 * @param projects The projects.
 * @returns The title of the project.
 */
export function getProjectTitle(projectUrlParts: IProjectUrl, projects: IProject[]): string {
    const project = lookupProject(projectUrlParts, projects);

    return project ? project.name : projectUrlParts.projectFolder;
}

/**
 * Get the title of the document.
 * @param projectUrlParts The project url parts.
 * @param projects The projects.
 * @returns The title of the document.
 */
export function getDocumentTitle(projectUrlParts: IProjectUrl, projects: IProject[]): string {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    const indexItem = getPage(projectVersionPages, projectUrlParts.projectFullURL);
    let docTitle;
    if (indexItem?.toc) {
        const h1 = indexItem.toc.find(docHeader => docHeader.level === 1);
        if (h1) {
            docTitle = h1.name;
        }
    }
    if (!docTitle) {
        docTitle = projectUrlParts.projectDocTitle;
    }
    return docTitle;
}

/**
 * Get the tags and description for the project.
 * @param projectUrlParts The project url parts.
 * @param projects The project.
 * @returns The tags and description.
 */
export function getDocumentTagsAndDescription(projectUrlParts: IProjectUrl, projects: IProject[]): {
    tags: string[];
    description: string;
    status: string[];
} {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    const indexItem = getPage(projectVersionPages, projectUrlParts.projectFullURL);
    let tags;
    let description;
    let status;
    if (indexItem) {
        tags = indexItem.tags;
        description = indexItem.description;
        status = indexItem.status;
    }
    return {
        tags,
        description,
        status
    };
}

/**
 * Get the version pages url.
 * @param projectPartsUrlPart The project url parts.
 * @param projectVersion The project version.
 * @param projects The projects.
 * @returns The project versions page url.
 */
export function getProjectVersionPagesUrl(
    projectPartsUrlPart: IProjectUrl, projectVersion: string, projects: IProject[]): IProjectVersionPage[] | undefined {
    return getProjectVersionPages(lookupProject(projectPartsUrlPart, projects), projectVersion);
}

/**
 * Get the project versions.
 * @param project The project.
 * @param projectVersion The project version.
 * @returns The page for the project version.
 */
export function getProjectVersionPages(project: IProject, projectVersion: string): IProjectVersionPage[] | undefined {
    if (project?.versions) {
        const version = project.versions.find(pv => pv.version === projectVersion);

        if (version) {
            return version.pages;
        }
    }
}

/**
 * Get the page.
 * @param versionPages The version pages.
 * @param itemUrl The item url.
 * @returns The page for the versioned content.
 */
export function getPage(versionPages: IProjectVersionPage[], itemUrl: string): IProjectVersionPage | undefined {
    return versionPages ? versionPages.find(indexItem => indexItem.link === itemUrl) : undefined;
}

/**
 * Replace the version in the current peoject url.
 * @param projectUrlParts The project url parts.
 * @param newVersion The new version.
 * @param projects The projects.
 * @returns The url with the version replaced.
 */
export function replaceVersion(projectUrlParts: IProjectUrl, newVersion: string, projects: IProject[]): string {
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, newVersion);
    if (projectVersionPages) {
        const newUrl = combineProjectUrl(projectUrlParts);

        // If there is not an equivalent document in the new version of the documentation
        // the just return the first page for the new version
        const foundIndex = projectVersionPages.findIndex(indexItem => indexItem.link === newUrl);
        if (foundIndex >= 0) {
            return newUrl;
        }
        return projectVersionPages[0].link;
    }
}

/**
 * Get the next page url.
 * @param projectUrlParts The project url parts.
 * @param projects The projects.
 * @returns The next page details.
 */
export function getNextPage(projectUrlParts: IProjectUrl, projects: IProject[]): IProjectVersionPage {
    let nextPage;
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    if (projectVersionPages) {
        const currentIndex = projectVersionPages.findIndex(
            indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex >= 0 && currentIndex < projectVersionPages.length) {
            nextPage = projectVersionPages[currentIndex + 1];
        }
    }

    // We exhausted the pages in the current project, so we need to find the next project
    if (!nextPage) {
        let projectIndex = projects.findIndex(p => p.folder === projectUrlParts.projectFolder);
        projectIndex++;
        if (projectIndex === projects.length) {
            projectIndex = 0;
        }

        // Skip any that don't have home page content
        while (!projects[projectIndex].home) {
            projectIndex++;
            if (projectIndex === projects.length) {
                projectIndex = 0;
            }
        }

        const latestVersion = getLatestVersion(projects[projectIndex]);
        const latestProjectVersionPages = getProjectVersionPages(projects[projectIndex], latestVersion);

        nextPage = latestProjectVersionPages[0];
    }

    return nextPage;
}

/**
 * Get the previous page url.
 * @param projectUrlParts The project url parts.
 * @param projects The projects.
 * @returns The previous page details.
 */
export function getPreviousPage(projectUrlParts: IProjectUrl, projects: IProject[]): IProjectVersionPage {
    let prevPage;
    const project = lookupProject(projectUrlParts, projects);

    const projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    if (projectVersionPages) {
        const currentIndex = projectVersionPages.findIndex(
            indexItem => indexItem.link === projectUrlParts.projectFullURL);
        if (currentIndex > 0) {
            prevPage = projectVersionPages[currentIndex - 1];
        }
    }

    // We exhausted the pages in the current project, so we need to find the previous project
    if (!prevPage) {
        let projectIndex = projects.findIndex(p => p.folder === projectUrlParts.projectFolder);
        projectIndex--;
        if (projectIndex < 0) {
            projectIndex = projects.length - 1;
        }

        // Skip any that don't have home page content
        while (!projects[projectIndex].home) {
            projectIndex--;
            if (projectIndex < 0) {
                projectIndex = projects.length - 1;
            }
        }

        const latestVersion = getLatestVersion(projects[projectIndex]);
        const latestProjectVersionPages = getProjectVersionPages(projects[projectIndex], latestVersion);

        prevPage = latestProjectVersionPages[latestProjectVersionPages.length - 1];
    }

    return prevPage;
}
