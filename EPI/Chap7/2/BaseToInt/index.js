module.exports = function baseToInt(str, base) {
  let result = 0;
  let multiplier = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    result += multiplier * (Number.parseInt(str[i], 16));
    multiplier *= base
  }
  return result;
};