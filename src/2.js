const fs = require('fs');

function readFile(path) {
  let data;
  try {
    data = fs.readFileSync(path);
  } catch (err) {
    console.error(err);
    return;
  }
  return data;
}
