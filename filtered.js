var path = require('path'),
    fs   = require('fs'),
    args = process.argv;

// call readdir() with callback
fs.readdir(args[2], function(err, files) {
  // Check for err. Log and return if so.
  if (err) {
    console.log(err);
    return err;
  } else {
      // edit extension given prior to loop. Prepending
      // one period is easier than losing one every
      // iteration.
      var extPassed = '.' + args[3].toString();
      // loop through the array received from readdir()
      // checking it's extension with the path module
      // each iteration.
      files.forEach(function(file) {
        var ext = path.extname(file);
        (ext === extPassed ? console.log(file) : true);
      });
    }
});