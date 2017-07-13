// compute parity of a word
module.exports = function(word) {
  // initialize at 0
  let result = 0
  word >>>= 0
  // while there are remaining bits in the word
  while (word) {
    // xor the result with the rightmost bit
    result ^= (word & 1)
    // right shift the word
    word >>>= 1
  }
  return result
}

