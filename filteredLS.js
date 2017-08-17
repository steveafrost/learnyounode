let fs = require('fs');
let path = require('path');
let userPath = process.argv[2];
let userExt = '.' + process.argv[3];

function loadPath(callback) {
  fs.readdir(userPath, function(err, files) {
    if (err) return console.error(err);
    callback(files);
  })
}

function processFiles(files) {
  for(var i = 0; i < files.length; i++) {
    if(path.extname(files[i]) == userExt) {
      console.log(files[i]);
    }
  }
}

loadPath(processFiles);
