// compute x^y
module.exports = function(x, y) {
  let result = 1.0
  let power = y
  if (y < 0) {
    power = -y
    result = 1.0 / result
  }
  while (power !== 0) {
    if ((power & 1) !== 0) {
      result *= x
    }
    x *= x
    power >>>= 1
  }
  return result
}