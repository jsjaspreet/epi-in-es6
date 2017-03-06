// compute parity of a word
module.exports = function(word) {
  let result = 0
  while(word > 0) {
    result ^= (word & 1)
    word >>>= 1
  }
  return result
}

