var asyncFileModule = require('./myModuleFileAsync.js'),
    path = process.argv[2],
    extension = process.argv[3];

asyncFileModule(path, extension, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  };

});

