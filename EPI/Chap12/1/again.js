function binarySearch(hay, needle) {
  let [lower, upper] = [0, hay.length];
  while (lower < upper) {
    const midPt = lower + Math.floor((upper - lower) / 2);
    if (hay[midPt] === needle) {
      return midPt;
    } else if (hay[midPt] > needle) {
      upper = midPt;
    } else {
      lower = midPt + 1;
    }
  }
  return -1;
}


module.exports = function firstOccurrence(hay, needle) {
  let firstOccurrence = binarySearch(hay, needle);
  console.log("firstOcc", firstOccurrence)
  while (true) {
    let nextSearch = binarySearch(hay.slice(0, firstOccurrence), needle);
    console.log("nextSearch", nextSearch)
    if (nextSearch < 0) {
      break;
    }
    firstOccurrence = nextSearch;
  }
  return firstOccurrence;
};
