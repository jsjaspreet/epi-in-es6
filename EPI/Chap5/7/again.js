module.exports = function(x, y) {
  let [base, power, result] = [x, y, 1.0]
  if (power < 0) {
    base = 1.0 / base
    power = -power
  }
  while (power) {
    if (power & 1) {
      result *= base
    }
    base *= base
    power >>>= 1
  }
  return result
}