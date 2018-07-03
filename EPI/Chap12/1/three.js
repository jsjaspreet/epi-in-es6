function bSearch(hay, needle, lo, hi) {
  let i = lo, j = hi;
  while (i < j) {
    let mid = i + Math.floor((j - i) / 2);
    if (hay[mid] === needle) {
      return mid;
    } else if (hay[mid] > needle) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}

module.exports = function firstOcc(hay, needle) {
  let occ = bSearch(hay, needle, 0, hay.length);
  if (occ === -1) {
    return -1;
  }
  while (true) {
    const nextOcc = bSearch(hay, needle, 0, occ);
    if (nextOcc < 0) {
      break;
    }
    occ = nextOcc;
  }
  return occ;
};