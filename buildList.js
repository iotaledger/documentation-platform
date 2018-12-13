const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const getProjects = dir => readdirSync(dir).filter(f => statSync(join(dir, f)).isDirectory())

const listFiles = dir => statSync(dir).isDirectory()
  ? Array.prototype.concat(...readdirSync(dir).map(f => listFiles(join(dir, f))))
  : dir;

const webifyPath = (p) => p.replace(/\\/g, "/");

const getDocPages = baseDir => {
  const dirs = getProjects(baseDir)
  const files = Array.prototype.concat(...dirs.map(dir =>
    listFiles(`${baseDir}/${dir}`).map(file => ({
      path: webifyPath(file).replace('.md',''),
      title: `${webifyPath(dir)} ${webifyPath(file).replace(`docs/${webifyPath(dir)}/`, '').replace('.md','')}`,
      markdownSrc: webifyPath(file)
    }))
  ))
  return files
}

const buildMenuItems = baseDir => {
  const projects = getProjects(baseDir)
  const menu = {}
  projects.forEach(name => {
    const versions = {}

    const projectVersions = getProjects(`${baseDir}/${name}/reference`)

    projectVersions.forEach(version => {
      const children = listFiles(`${baseDir}/${name}/reference/${version}`).map(file => ({
        name: webifyPath(file).match(/[^\/]+$/)[0].replace('.md', ''),
        link: `/${webifyPath(file).replace('.md', '')}`
      }))
      versions[version] = children
    })

    menu[name] = { name, versions }
  })
  return menu
}

module.exports = {
  getDocPages,
  buildMenuItems
}
