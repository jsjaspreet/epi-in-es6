function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

module.exports = function (arr, pivot) {
  let l = 0, r = arr.length - 1, currIdx = 0;
  while (currIdx < r) {
    let curr = arr[currIdx];
    if (curr === pivot) {
      currIdx++;
    } else if (curr < pivot) {
      swap(arr, l, currIdx);
      l++;
      currIdx++;
    } else {
      swap(arr, r, currIdx);
      r--;
    }
  }
  return arr;
};