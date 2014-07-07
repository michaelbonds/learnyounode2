var fs = require('fs');

// read file passed as second argument, 
// passing a callback function(for async purposes).
fs.readFile(process.argv[2].toString(), function(err, data) {
  
  // check for error. If true, log to console
  // and return(best practice).
  if(err) {
    console.log(err);
    return err;
  } else {
      
      // declare number to count off.
      var num = 0;
      
      // cast String to data, because it is a "buffer" object. 
      // split at new line ('\n') and iterate over to count.
      String(data).split('\n').forEach(function(){
        num += 1; 
      });

      // log number to console to verify with learnyounode.
      // - 1 for first item in array.
      console.log(num - 1);
    }
});