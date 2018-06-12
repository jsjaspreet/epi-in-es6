const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};


module.exports = (arr, pivot) => {
  let [lessIndex, currIndex, greaterIndex] = [0, 0, arr.length - 1];
  while (currIndex <= greaterIndex) {
    const currNum = arr[currIndex];
    if (currNum === pivot) {
      currIndex++;
    } else if (currNum < pivot) {
      swap(arr, currIndex, lessIndex);
      currIndex++;
      lessIndex++;
    } else {
      swap(arr, currIndex, greaterIndex);
      greaterIndex--;
    }
  }
  console.log('currIndex', currIndex)
  return arr;
};