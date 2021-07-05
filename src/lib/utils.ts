const fsLib = require('fs')
const path = require('path');

function collectDirFiles(dir: string): string[] {
    let results: string[] = [];
    let list: string[] = fsLib.readdirSync(dir);
    list.forEach(function (file: string) {
        file = path.join(dir, file);
        let stat = fsLib.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(collectDirFiles(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}
module.exports.collectDirFiles = collectDirFiles;
