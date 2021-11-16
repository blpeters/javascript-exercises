const ftoc = function(f) {
  let celsius = Math.abs((f - 32) * (5 / 9));
  let celsiusRounded = Math.round((celsius * 10)) / 10;
  if(((f - 32) * (5 / 9)) < 0) {
    return (-celsiusRounded);
  }
  return celsiusRounded;
};

const ctof = function(c) {
  let fahrenheit = Math.abs(c * (9 / 5) + 32);
  let fahrenheitRound = Math.round((fahrenheit * 10)) /10;
  if (c * (9 / 5) + 32 < 0) {
    return (-fahrenheitRound);
  }
  return fahrenheitRound;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
