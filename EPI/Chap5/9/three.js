// test whether a number is a palindrome
module.exports = function(number) {
  if (number < 0) {
    return false
  }
  if (number === 0) {
    return true
  }
  const numDigits = Math.floor(Math.log10(number)) + 1
  let msdMask = Math.pow(10, numDigits - 1)
  for (let i = 0; i < Math.floor(numDigits / 2); i++) {
    let onesDigit = number % 10
    let highestDigit = Math.floor(number / msdMask)
    if (onesDigit !== highestDigit) {
      return false
    }
    number %= msdMask
    number = Math.floor(number / 10)
    msdMask = Math.floor(msdMask / 100)
  }
  return true
}