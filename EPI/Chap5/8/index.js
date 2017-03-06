// reverse digits, ie: 314 -> 413, -102 -> -201

module.exports = function(num) {
  if (num === 0) return 0

  const isNegative = num < 0
  if (isNegative) num = -num

  let result = 0
  while (num !== 0) {
    let onesDigit = num % 10
    result *= 10
    result += onesDigit
    num = Math.floor(num / 10)
  }
  return isNegative ? -result : result
}