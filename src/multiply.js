function multiply(...args) {

  let i = 0;
  let res = 1;

  for(; i < args.length; i++){

    res = res * args[i];
  }
  return res;
}

console.log(multiply(8, 7, 5));