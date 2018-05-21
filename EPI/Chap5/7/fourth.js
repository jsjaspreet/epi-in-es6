module.exports = function (x, y) {
  let [result, base, power] = [1, x, y];
  if (power < 0) {
    base = 1.0 / x;
    power = Math.abs(power);
  }
  while (power > 0) {
    if (power & 1) {
      result *= base;
    }
    power >>>= 1;
    base *= base;
  }
  return result;
};