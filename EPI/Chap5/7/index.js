// compute x^y
module.exports = function(x, y) {
  let result = 1.0
  let power = y
  let base = x
  if (y < 0) {
    power = -y
    base = 1.0 / x
  }
  while (power !== 0) {
    if (power & 1) {
      result *= base
    }
    base *= base
    power >>>= 1
  }
  return result
}