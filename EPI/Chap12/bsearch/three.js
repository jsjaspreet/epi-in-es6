module.exports = function binarySearch(hay, needle) {
  let [lower, upper] = [0, hay.length];
  while (lower < upper) {
    const midPt = lower + Math.floor((upper - lower) / 2);
    if (hay[midPt] === needle) {
      return [true];
    } else if (hay[midPt] > needle) {
      upper = midPt;
    } else {
      lower = midPt+1;
    }
  }
  return [false];
}