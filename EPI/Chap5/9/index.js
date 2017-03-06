// check whether a number is a palindrome
module.exports = function(number) {
  if (number < 0) {
    return false
  } else if (number === 0) {
    return true
  }
  let numDigits = Math.floor(Math.log10(number)) + 1
  let msdMask = Math.pow(10, numDigits - 1)
  for (let i = 0; i < Math.floor(numDigits / 2); i++) {
    let highestDigit = Math.floor(number / msdMask)
    let lowestDigit = number % 10
    if (highestDigit !== lowestDigit) {
      return false
    }
    number %= msdMask
    number = Math.floor(number / 10)
    msdMask = Math.floor(msdMask / 100)
  }
  return true
}