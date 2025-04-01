const fs = require('fs');

function readTextFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, data) => {
      if (error) {
        reject(new Error(`Failed to read file: ${file} - ${error}`));
      } else {
        resolve(data);
      }
    });
  });
}

function writeFileTextFile(filePath, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, 'utf8', (err) => {
      if (err) {
        reject(new Error(`Failed to write file: ${filePath} - ${err}`));
      } else {
        resolve();
      }
    });
  });
}

function createFileIfNotExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.accessSync(filePath, fs.constants.F_OK)
      .then(isAccessible => {
        if (!isAccessible) {
          writeFileTextFile(filePath, 'Initializing...');
          readFileTextFile(filePath).then(text => {
            resolve(text);
          });
        } else {
          readTextFile(filePath).then(data => {
            readFileTextFile(filePath).then(updatedData => {
              resolve(updatedData);
            });
          });
        }
      })
      .catch(error => reject(new Error(`Failed to access file: ${filePath} - ${error}`)));
  });
}

module.exports = { createFileIfNotExists };
