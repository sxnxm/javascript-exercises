const add = function (num1, num2) {
  addition = num1 + num2;
  return addition;
};

const subtract = function (num1, num2) {
  subtraction = num1 - num2;
  return subtraction;
};

const sum = function (num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
};

const multiply = function (num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    result *= num[i];

  }
  return result;

};

const power = function (base, exponent) {
  result = base ** exponent;
  return result;
};


const factorial = function (int) {
  let result = 1;
  for (let i = int; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
