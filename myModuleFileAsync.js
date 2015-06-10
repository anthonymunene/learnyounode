var fs = require('fs');
var path = require('path');

var readFiles = function(dirPath, extension, callback) {
  fs.readdir(dirPath, function(err, list) {
    if (err) {
      return callback(err);
    }
    else {
      var filesArray = [];
      list.forEach(function(file) {
        if (path.extname(file) === '.' + extension) {
          filesArray.push(file);
        }
      });
      callback(null, filesArray);
    }

  });

}

module.exports =  readFiles;
