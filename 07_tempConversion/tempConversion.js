const ftoc = function (fahrenheit) {
  converted = ((fahrenheit - 32) * 5) / 9;
  rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const ctof = function (celsius) {
  converted = celsius * 9 / 5 + 32;
  rounded = Math.round(converted * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
