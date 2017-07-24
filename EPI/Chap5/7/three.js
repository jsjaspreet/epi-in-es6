function odd(number) {
  return number % 2 === 1
}

module.exports = function(x, y) {
  let negBase = x < 0
  let [result, base, power] = [1.0, x, y]
  if (power < 0) {
    base = Math.abs(1.0 / base)
    power = -power
  }
  while (power) {
    if (power & 1) {
      result *= base
    }
    base *= base
    power >>>= 1
  }
  if (negBase && odd(power)) {
    return -result
  }
  return result
}