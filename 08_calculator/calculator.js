const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, number) => {
    return total * number;
  });
  //The reason you don't need the default value of 0 after the reduce function lie we did for the sum function (above) is that giving the initial value of total of 0 causes a multiple of zero, which is always zero. We can either put 1 or leave it blank (undefined until the next loop)
};

const power = function (number, powerNumber) {
  return number ** powerNumber; //Could have also used Math.pow(a, b) here but I wasn't sure if Math library was native or needed importing.
};

//This factorial method doesn't seem very clean but it works. Compare to the TOP solution for code simplicity/elegance. The solutions show an option for a clean recursive solution.
const factorial = function (number) {
  let facTotal = 1;
  while (number >= 1) {
    facTotal = facTotal * number;
    number--;
  }
  return facTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
