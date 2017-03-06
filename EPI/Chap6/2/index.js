module.exports = function(numArray) {
  let success = false
  for (let i = numArray.length - 1; i >= 0; i--) {
    if (numArray[i] !== 9) {
      numArray[i] = numArray[i] + 1
      success = true
      break
    } else {
      numArray[i] = 0
    }
  }
  return success ? numArray : [1, ...numArray]
}