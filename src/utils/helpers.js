export const getVersion = path => {
  let regex = new RegExp('\\w+');
  if (path.indexOf('reference/') > -1) {
    regex = new RegExp(/\/reference\/\s*(.*?)\s*\//g);
  } else if (path.indexOf('examples/') > -1) {
    regex = new RegExp(/\/examples\/\s*(.*?)\s*\//g);
  } else {
    return null
  }
  const matches = regex.exec(path)
  return matches.length >= 2 ? matches[1] : null
}

export const getProjectName = path => {
  const regex = new RegExp(/\/docs\/\s*(.*?)\s*\//g);
  const matches = regex.exec(path)
  return matches && matches.length >= 2 ? matches[1] : null
}

export const getNextPage = (projectUrlParts, data) => {
  const docList = data[projectUrlParts.projectName].versions[projectUrlParts.projectVersion]
  let currIndex = docList.findIndex(elm => elm.name == projectUrlParts.projectDocTitle)
  let nextName = ''
  let nextUrl = ''
  if(currIndex < docList.length - 1) {
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
  if(currIndex > 0) {
    currIndex--
    previousUrl = docList[currIndex].link
    previousName = docList[currIndex].name
  }
  return { previousName, previousUrl }
}

export function parseProjectUrl(projectFullURL) {
  ///docs/HUB/reference/2.0/README/something/something

  const urlParts = projectFullURL.split('/');
  const projectName = urlParts[2];
  const projectVersion = urlParts[4];
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
  ///docs/HUB/reference/2.0/README/something/something

  return `/docs/${projectParts.projectName}/reference/${projectParts.projectVersion}/${projectParts.projectDoc}`;
}

