function bSearch(hay, needle, lo, hi) {
  let i = lo, j = hi;
  while (i < j) {
    let m = i + Math.floor((j - i) / 2);
    if (hay[m] === needle) {
      return m;
    } else if (hay[m] < needle) {
      i = m + 1;
    } else {
      j = m;
    }
  }
  return -1;
}

module.exports = function (arr, num) {
  let occ = bSearch(arr, num, 0, arr.length);
  if (occ === -1) {
    return occ;
  }
  while (true) {
    let nextOcc = bSearch(arr, num, occ + 1, arr.length);
    if (nextOcc < 0) {
      break;
    }
    occ = nextOcc;
  }
  return occ;
};