export const getVersion = path => {
  if (path.indexOf('reference/') > -1 || path.indexOf('examples/') > -1) {
    const matchArr = path.match(/(?<=(reference|examples)\/).*?(?=\/+)/)
    return matchArr.length > 0 ? matchArr[0] : null
  }
  return null
}

export const getProjectName = path => path.match(/(?<=docs\/).*?(?=\/+)/)[0];
