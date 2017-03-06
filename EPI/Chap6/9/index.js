module.exports = function(limit) {
  let boolArray = []
  for (let i = 0; i < limit + 1; i++) {
    boolArray.push(true)
  }
  boolArray[0] = false
  boolArray[1] = false
  let primes = []
  for (let i = 2; i < limit + 1; i++) {
    if (boolArray[i]) {
      primes.push(i)
      for (let j = i * 2; j < limit + 1; j += i) {
        boolArray[j] = false
      }
    }
  }
  return primes
}