var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var fsLib = require('fs');
var path = require('path');
var collectDirFiles = function (dir) {
    return fsLib.readdirSync(dir).reduce(function (results, fileName) {
        var fullFilePath = path.join(dir, fileName);
        var stat = fsLib.statSync(fullFilePath);
        if (stat && stat.isDirectory()) {
            return __spreadArray(__spreadArray([], results), collectDirFiles(fullFilePath));
        }
        return __spreadArray(__spreadArray([], results), [fullFilePath]);
    }, []);
};
module.exports.collectDirFiles = collectDirFiles;
//# sourceMappingURL=utils.js.map