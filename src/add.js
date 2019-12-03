function add(...args){
  let i = 0;
  let sum = 0;

  for(;i < args.length; i++){
    sum = sum + args[i];
  }

  return sum;
}

module.exports = add;
