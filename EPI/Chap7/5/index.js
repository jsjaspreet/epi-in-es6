// test palindromicity, ignore non alphanumeric characters
module.exports = function(string) {
  const alphanumeric = /[a-zA-Z0-9]/
  const filteredString = string.split("").filter(char => alphanumeric.test(char)).join("").toLowerCase()
  let fsLength = filteredString.length
  for (let i = 0; i < Math.floor(filteredString.length / 2); i++) {
    let lastChar = filteredString[fsLength - 1 - i]
    if (filteredString[i] !== lastChar) {
      return false
    }
  }
  return true
}
