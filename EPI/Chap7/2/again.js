module.exports = function(str, b1, b2) {
  const characters = str.split("")
  let multiplier = 1
  let result = 0
  for (let i = characters.length - 1; i >= 0; i--) {
    let digit = Number.parseInt(characters[i], b1)
    result += multiplier * digit
    multiplier *= b1
  }
  return result.toString(b2).toUpperCase()
}