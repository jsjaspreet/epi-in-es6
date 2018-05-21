module.exports = function (word) {
  let parity = 0;
  while (word !== 0) {
    parity ^= word & 1;
    word >>>= 1;
  }
  return parity;
};