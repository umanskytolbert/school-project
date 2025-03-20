const fs = require('fs');
const path = require('path');

// Function to read files in directory and print their contents
function readFilesInDirectory(directory) {
  const files = [];
  fs.readdir(directory, (err, dirs) => {
    if (err) throw err;
    dirs.forEach(dir => {
      if (path.isDir(path.join(directory, dir))) {
        files.push(readFilesInDirectory(path.join(directory, dir)));
      } else {
        files.push(`${dir} - ${fs.readFileSync(path.join(directory, dir)).toString()}`);
      }
    });
  });

  return files;
}

// Function to find the longest common prefix among multiple strings
function findLongestCommonPrefix(strs) {
  if (strs.length <= 1) {
    return strs[0];
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix, 0) !== 0 && prefix.length > 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

// Function to print the longest common prefix among all files in a directory
function printLongestCommonPrefix(directory) {
  const files = readFilesInDirectory(directory);
  let longestPrefix = findLongestCommonPrefix(files);

  console.log(`The longest common prefix in the files is: ${longestPrefix}`);
}

// Main function to get input from user
function main() {
  const directoryInput = process.argv[2];

  if (!directoryInput) {
    console.log("Please provide a directory as an argument.");
    process.exit(1);
  }

  printLongestCommonPrefix(directoryInput);
}

main();
