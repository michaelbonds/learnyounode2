var fs = require('fs'), 
  file = fs.readFileSync(process.argv[2]), 
  arr = [],
  num = 0;

arr = file.toString().split('\n');

arr.forEach(function(i){
  num++
});

console.log(num - 1);