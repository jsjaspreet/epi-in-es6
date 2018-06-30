module.exports = (x, y) => {
  let diff = 0, msk = 1;
  while (x !== y) {
    if ((x & msk) !== (y & msk)) {
      diff++;
    }
    y >>>= 1;
    x >>>= 1;
  }
  return diff;
};