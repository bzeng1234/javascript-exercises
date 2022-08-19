const ftoc = function(fahrenheit) {
  let celsisus = (fahrenheit - 32) * 5/9;
  return parseFloat(celsisus.toFixed(1));
};

const ctof = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
