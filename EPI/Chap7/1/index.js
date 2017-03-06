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

const numDict = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9']


function stringToInteger(str) {
  const isNegative = str[0] === '-'
  if (isNegative) {
    str = str.slice(1)
  }
  const positions = str.split("")
  let result = 0
  for (let i = 0; i < positions.length; i++) {
    result *= 10
    result += stringDict[positions[i]]
  }
  return isNegative ? -result : result
}

function integerToString(num) {
  let stringList = []
  const isNegative = num < 0
  if (isNegative) {
    num = -num
  }
  if (num === 0) {
    return numDict[0]
  }
  while (num !== 0) {
    let onesDigit = num % 10
    stringList = [numDict[onesDigit], ...stringList]
    num = Math.floor(num / 10)
  }
  const result = stringList.join("")
  return isNegative ? `-${result}` : result
}

module.exports = {
  integerToString,
  stringToInteger
}