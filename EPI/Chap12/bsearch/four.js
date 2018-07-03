module.exports = function (hay, needle) {
  let lo = 0, hi = hay.length;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (hay[mid] === needle) {
      return [true];
    } else if (hay[mid] > needle) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return [false];
};