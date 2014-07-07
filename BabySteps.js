var number = 0;
process.argv.forEach(function(i) {
  if(i>1){
    number += Number(i);
  }
});
console.log(number);