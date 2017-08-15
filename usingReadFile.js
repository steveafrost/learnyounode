let fs = require('fs');
let fileName = process.argv[2];
let newLineCount = "HELLO";

function loadFile(callback) {
  fs.readFile(fileName, function done(err, file) {

    callback(file)
  });
}

function processFile(file) {
  let fileContent = file.toString();
  let newLineCount = fileContent.split('\n').length - 1;
  console.log(newLineCount);
}

loadFile(processFile);
