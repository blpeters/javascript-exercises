const fibonacci = function (number) {
  //1,1,2,3,5,8,13,21...
  number = parseInt(number);
  if (number >= 0) {
    const fib = [1, 1];
    let n = 0;
    for (let i = 1; i < number; i++) {
      n = fib[i] + fib[i - 1];
      fib.push(n);
    }

    return fib[fib.length - 2];
  } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
