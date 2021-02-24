const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    /*Returns current directory from where the process is started*/
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    /*Returns true if the file path exists while the application runs*/
    return fs.existsSync(filePath);
  },

  getDirectoryPath: () => {
    /*Returns folder path*/
    return process.cwd();
  },

  createDirectory: (dirPath, message) => {
    fs.mkdir(dirPath, {recursive: true}, (error) => {
        if (error) {
        console.error('Permission denied')
        } else {
        console.log(message);
        }
    });
  },

  createFile: (filePath, data, message) => {
    fs.writeFile(filePath, data, (error) => {
        if (error) {
        console.error('Permission denied')
        } else {
        console.log(message);
        }
    });
  }
};