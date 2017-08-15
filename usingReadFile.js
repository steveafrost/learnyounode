let fs = require('fs');
let fileName = process.argv[2];
let newLineCount = "HELLO";

function loadFile(callback) {
  fs.readFile(fileName, "utf8", function(err, content) {
    callback(content);
  })
}

function processFile(content) {
  let newLineCount = content.split('\n').length - 1;
  console.log(newLineCount);
}

loadFile(processFile);
