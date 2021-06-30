const fsLib = require('fs')
const path = require('path');


function collectDirFiles(dir) {
    let results = [];
    let list = fsLib.readdirSync(dir);
    list.forEach(function (file) {
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
