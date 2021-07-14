const fsLib = require('fs')
const path = require('path');

const collectDirFiles = (dir: string): string[] =>
  fsLib.readdirSync(dir).reduce((results: string[], fileName: string) => {
    const fullFilePath = path.join(dir, fileName);
    const stat = fsLib.statSync(fullFilePath);

    if (stat && stat.isDirectory()) {
      return [...results, ...collectDirFiles(fullFilePath)];
    }

    return [...results, fullFilePath];
  }, []);

module.exports.collectDirFiles = collectDirFiles;
