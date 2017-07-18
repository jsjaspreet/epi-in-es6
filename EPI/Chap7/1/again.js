const stringDict = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

module.exports = {
  stringToInteger: (str) => {
    const isNegative = str[0] === '-'
    if (isNegative) {
      str = str.slice(1)
    }
    let result = 0,
      length = str.length
    for (let i = 0; i < length; i++) {
      result *= 10
      result += stringDict[str[i]]
    }
    return isNegative ? -result : result
  }
}