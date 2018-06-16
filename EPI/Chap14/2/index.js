module.exports = (arr1, m, arr2, n) => {
  let writeIndex = m + n - 1;
  let [arr1Index, arr2Index] = [m - 1, n - 1];
  while (arr1Index >= 0 && arr2Index >= 0) {
    arr1[writeIndex--] = arr1[arr1Index] > arr2[arr2Index] ? arr1[arr1Index--] : arr2[arr2Index--];
  }
  while (arr2Index >= 0) {
    arr1[writeIndex--] = arr2[arr2Index--];
  }
  return arr1;
};