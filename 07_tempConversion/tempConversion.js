const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);
  let celsiusRounded = Math.round(celcius * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = celcius * (9 / 5) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
