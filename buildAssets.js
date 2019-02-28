/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const emoji = require('node-emoji');
const chalk = require('chalk');

function run(projectDataFile, assetsFolder) {
    const projectData = JSON.parse(fs.readFileSync(projectDataFile).toString());

    rimraf.sync(`${assetsFolder}/**/*`);

    try {
        fs.mkdirSync(assetsFolder);
    } catch (err) {
        // Dont fail if dir already exists
    }

    const siteAssetsDirSrc = './docs/site-settings/assets';
    const siteAssetDirDest = `${assetsFolder}/site-settings`;
    mkdirp.sync(siteAssetDirDest);
    const siteAssetFiles = fs.readdirSync(siteAssetsDirSrc);
    for (let i = 0; i < siteAssetFiles.length; i++) {
        console.log(chalk.cyan(`\tCopying Site Asset: '${siteAssetsDirSrc}/${siteAssetFiles[i]}'`));
        fs.copyFileSync(`${siteAssetsDirSrc}/${siteAssetFiles[i]}`, `${siteAssetDirDest}/${siteAssetFiles[i]}`);
    }

    for (let i = 0; i < projectData.length; i++) {
        const project = projectData[i];

        for (let j = 0; j < project.versions.length; j++) {
            const version = project.versions[j];

            for (let k = 0; k < version.pages.length; k++) {

                if (version.pages[k].assets) {
                    for(let l = 0; l < version.pages[k].assets.length; l++) {
                        const assetSrc = path.resolve(path.join('.', version.pages[k].assets[l]));
                        const assetDest =  path.resolve(path.join(assetsFolder, version.pages[k].assets[l].replace('/docs', '')));
                        console.log(chalk.cyan(`\tCopying: '${assetSrc}'`));
                        console.log(chalk.cyan(`\tTo: '${assetDest}'\n`));
                        mkdirp.sync(path.dirname(assetDest));
                        fs.copyFileSync(assetSrc, assetDest);
                    }
                }
            }
        }
    }
}

try {
    console.log(chalk.green.underline.bold('Build Doc Assets\n'));
    const projectsJson = process.argv[2];
    const assetsFolder = process.argv[3];
    if (!projectsJson || !assetsFolder) {
        console.log('\nUsage: \nprojectsJson\nassetsFolder\n');
        process.exit(1);
    }
    run(projectsJson, assetsFolder);
    console.log(chalk.green(`\n${emoji.get('smile')}  Completed Successfully`));
} catch (err) {
    console.error(chalk.red(`\n${emoji.get('frown')}  Building failed with the following error:`));
    console.error(chalk.red(err.message));
    process.exit(1);
}

