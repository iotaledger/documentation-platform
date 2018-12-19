export const getNextPage = (projectUrlParts, data) => {
  const docList = data[projectUrlParts.projectName].versions[projectUrlParts.projectVersion]
  let currIndex = docList.findIndex(elm => elm.name == projectUrlParts.projectDocTitle)
  let nextName = ''
  let nextUrl = ''
  if (currIndex < docList.length - 1) {
    currIndex++
    nextUrl = docList[currIndex].link
    nextName = docList[currIndex].name
  }
  return { nextName, nextUrl }
}

export const getPreviousPage = (projectUrlParts, data) => {
  const docList = data[projectUrlParts.projectName].versions[projectUrlParts.projectVersion]
  let currIndex = docList.findIndex(elm => elm.name == projectUrlParts.projectDocTitle)
  let previousName = ''
  let previousUrl = ''
  if (currIndex > 0) {
    currIndex--
    previousUrl = docList[currIndex].link
    previousName = docList[currIndex].name
  }
  return { previousName, previousUrl }
}

export function parseProjectUrl(projectFullURL) {
  ///docs/HUB/2.0/reference/README/something/something

  const urlParts = projectFullURL.split('/');
  const projectName = urlParts[2];
  const projectVersion = urlParts[3];
  const projectDocParts = urlParts.slice(5);
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
  ///docs/HUB/2.0/reference/README/something/something

  return `/docs/${projectParts.projectName}/${projectParts.projectVersion}/reference/${projectParts.projectDoc}`;
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

export function getLatestVersion(projectName, menu) {
  return menu[projectName] ? Object.keys(menu[projectName].versions).slice(-1) : "";
}