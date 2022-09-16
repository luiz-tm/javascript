const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname, '..', '..', 'javascript')

    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()) {
            readdir(fileFullPath)
            continue;
        }

        if(/\.git/.test(fileFullPath)) continue;
        if(/node_modules/.test(fileFullPath)) continue;

        console.log(fileFullPath, stats.isDirectory())
    }
}

readdir()