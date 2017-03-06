// Convert Bases
module.exports = function(str, b1, b2) {
  const letterList = str.split("")
  let multiplier = 1
  let result = 0
  for (let i = letterList.length - 1; i >= 0; i--) {
    let num = Number.parseInt(letterList[i], b1)
    result += num * multiplier
    multiplier *= b1
  }
  return (result).toString(b2).toUpperCase()
}