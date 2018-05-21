module.exports = function (number) {
  const sign = Math.sign(number);
  let absoluteNumber = Math.abs(number);
  let result = 0;
  while (absoluteNumber) {
    let onesDigit = absoluteNumber % 10;
    result *= 10;
    result += onesDigit;
    absoluteNumber = Math.floor(absoluteNumber / 10);
  }
  return sign * result;
};