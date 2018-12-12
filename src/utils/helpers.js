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
