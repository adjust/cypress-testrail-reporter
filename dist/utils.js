var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fsLib = require('fs');
var path = require('path');
var collectDirFiles = function (dir) {
    return fsLib.readdirSync(dir).reduce(function (results, fileName) {
        var fullFilePath = path.join(dir, fileName);
        var stat = fsLib.statSync(fullFilePath);
        if (stat && stat.isDirectory()) {
            return __spreadArray(__spreadArray([], results, true), collectDirFiles(fullFilePath), true);
        }
        return __spreadArray(__spreadArray([], results, true), [fullFilePath], false);
    }, []);
};
module.exports.collectDirFiles = collectDirFiles;
//# sourceMappingURL=utils.js.map