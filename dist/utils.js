var fsLib = require('fs');
var path = require('path');
function collectDirFiles(dir) {
    var results = [];
    var list = fsLib.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        var stat = fsLib.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(collectDirFiles(file));
        }
        else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}
module.exports.collectDirFiles = collectDirFiles;
//# sourceMappingURL=utils.js.map