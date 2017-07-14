// reverse digits
module.exports = function(number) {
  const sign = Math.sign(number)
  if (sign < 0) number = -number
  let result = 0
  while (number) {
    let onesDigit = number % 10
    result *= 10
    result += onesDigit
    number = Math.floor(number / 10)
  }
  return sign * result
}