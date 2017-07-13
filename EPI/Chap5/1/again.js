// compute the parity of a word
module.exports = function(word) {
  let result = 0
  while (word) {
    result ^= (word & 1)
    word >>>= 1
  }
  return result
}