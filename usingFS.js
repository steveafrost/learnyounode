let fs = require('fs');
let file = fs.readFileSync(process.argv[2]);
let fileContent = file.toString();
let newLineCount = fileContent.split('\n').length - 1;

console.log(newLineCount);
