module.exports.add = function(...args){
  let i = 0;
  let sum = 0;

  for(;i < args.length; i++){
    sum = sum + args[i];
  }

  return sum;
}

module.exports.multiply = function(...args) {

  let i = 0;
  let res = 1;

  for(; i < args.length; i++){

    res = res * args[i];
  }
  return res;
}
