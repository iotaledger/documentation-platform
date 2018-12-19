export const getNextPage = (projectUrlParts, data) => {
  const projectIndex = getProjectIndex(projectUrlParts, data);
  if (projectIndex) {
    const currentIndex = projectIndex.findIndex(indexItem => indexItem.link === projectUrlParts.projectFullURL);
    if (currentIndex >= 0 && currentIndex < projectIndex.length) {
      return projectIndex[currentIndex + 1];
    }
  }

  return undefined;
}

export const getPreviousPage = (projectUrlParts, data) => {
  const projectIndex = getProjectIndex(projectUrlParts, data);
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

export function createFloatingMenuEntries(homePageContent, menuData) {
  if (!menuData) {
    return [{ name: "New To IOTA?", link: "#new_to_iota?" }]
      .concat(homePageContent.map(entry => ({
        name: entry.header,
        link: `#${entry.header.toLowerCase().replace(/ /g, "_")}`
      })));
  } else {
    return [{ name: "New To IOTA?", link: "/" }]
      .concat(homePageContent.map(entry => {
        const projectUrlParts = {
          projectName: entry.header,
          projectVersion: getLatestVersion(entry.header, menuData),
          projectDoc: "README"
        };

        return {
          name: entry.header,
          link: combineProjectUrl(projectUrlParts)
        };
      }));
  }
}

export function getLatestVersion(projectName, data) {
  return data[projectName] ? Object.keys(data[projectName].versions).slice(-1) : "";
}

export function getDocumentTitle(projectUrlParts, data) {
  const projectIndex = getProjectIndex(projectUrlParts, data);
  const indexItem = getIndexItem(projectIndex, projectUrlParts.projectFullURL);
  return indexItem ? indexItem.name : "";
}

export function getProjectIndex(projectUrlParts, data) {
  return data[projectUrlParts.projectName] && data[projectUrlParts.projectName].versions ?
    data[projectUrlParts.projectName].versions[projectUrlParts.projectVersion] : undefined;
}

export function getIndexItem(projectIndex, itemUrl) {
  return projectIndex ? projectIndex.find(indexItem => indexItem.link === itemUrl) : undefined;
}

export function replaceVersion(projectUrlParts, newVersion, data) {
  projectUrlParts.projectVersion = newVersion;

  const projectIndex = getProjectIndex(projectUrlParts, data);
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