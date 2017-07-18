module.exports = function(A1, A2) {
  let A1index = 0, A2index = 0, result = []
  while (A1index < A1.length || A2index < A2.length) {
    if (A1index === A1.length) {
      result = [...result, ...A2.slice(A2index)]
      break
    }
    if (A2index === A2.length) {
      result = [...result, ...A1.slice(A1index)]
      break
    }
    const A1curr = A1[A1index], A2curr = A2[A2index]
    if (A1curr < A2curr) {
      A1index++
      result.push(A1curr)
    } else {
      A2index++
      result.push(A2curr)
    }
  }
  return result
}