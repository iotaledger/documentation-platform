const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const getProjects = dir => readdirSync(dir).filter(f => statSync(join(dir, f)).isDirectory())

const listFiles = dir => statSync(dir).isDirectory()
  ? Array.prototype.concat(...readdirSync(dir).map(f => listFiles(join(dir, f))))
  : dir;

const getDocPages = baseDir => {
  const dirs = getProjects(baseDir)
  const files = Array.prototype.concat(...dirs.map(dir =>
    listFiles(`${baseDir}/${dir}`).map(file => ({
      path: file.replace('.md',''),
      title: `${dir} ${file.replace(`docs/${dir}/`, '').replace('.md','')}`,
      markdownSrc: file
    }))
  ))
  return files
}

const buildMenuItems = baseDir => {
  const projects = getProjects(baseDir)
  const menu = {}
  const versions = {}
  projects.forEach(name => {
    const projectVersions = getProjects(`${baseDir}/${name}/reference`)
    projectVersions.forEach(version => {
      const children = listFiles(`${baseDir}/${name}/reference/${version}`).map(file => ({
        name: file.match(/[^\/]+$/)[0].replace('.md', ''),
        link: `/${file.replace('.md', '')}`
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
