const { readdirSync, statSync, mkdirSync, copyFileSync } = require('fs');
const { dirname, join, resolve } = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const docsFolder = 'docs';

const listDirs = dir => readdirSync(dir).filter(f => statSync(join(dir, f)).isDirectory());

const listFiles = dir => statSync(dir).isDirectory()
    ? Array.prototype.concat(...readdirSync(dir).map(f => listFiles(join(dir, f))))
    : dir;

const webifyPath = (p) => p.replace(/\\/g, '/');

const getNonDocPages = baseDir => {
    const dirs = listDirs(baseDir);
    const files = Array.prototype.concat(...dirs.map(dir =>
        listFiles(`${baseDir}/${dir}`).filter(f => !/.md$/i.test(f)).map(file => webifyPath(file))
    ));
    return files;
};

const markdownAssets = getNonDocPages(docsFolder);

const builtAssetsFolder = './public/assets/';

rimraf.sync(`${builtAssetsFolder}${docsFolder}/**/*`);

try {
    mkdirSync(`${builtAssetsFolder}${docsFolder}`);
} catch (err) {
    // Dont fail if dir already exists
}

markdownAssets.forEach(asset => {
    // eslint-disable-next-line no-console
    console.log(`Copying: ${asset} to /public/assets/`);
    const destFile = resolve(`${builtAssetsFolder}${asset}`);
    mkdirp.sync(dirname(destFile));
    copyFileSync(resolve(`./${asset}`), resolve(`${builtAssetsFolder}${asset}`));
});


