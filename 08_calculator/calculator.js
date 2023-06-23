const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function(...args) {
  return args.reduce((total, number) => total * number, 1);
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
  // return Math.pow(a, b);
};

const factorial = function(a) {
  let f = 1;
	if (a > 1) {
    for (let i = a; i > 1; i--) {
      f *= i;
    }
  }
  return f;
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
