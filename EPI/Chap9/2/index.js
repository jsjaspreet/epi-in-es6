function calc(first, second, op) {
  switch (op) {
  case '+':
    return first + second
    break
  case '-':
    return first - second
    break
  case '*':
    return first * second
    break
  case '/':
    return first / second
    break
  }
}

module.exports = function(rpn) {
  const rpnLength = rpn.length
  // Single Number, simply parse and return
  if (rpnLength == 1) {
    return Number.parseInt(rpn[0])
  }

  // Otherwise, compute base case
  let first = Number.parseInt(rpn[0])
  let second = Number.parseInt(rpn[1])
  let op = rpn[2]
  let result = calc(first, second, op)

  // And iterate for any other remaining ops
  for (let i = 3; i < rpnLength; i += 2) {
    result = calc(result, Number.parseInt(rpn[i]), rpn[i + 1])
  }
  return result
}