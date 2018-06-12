const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};


const partitionAndGetPivotIndex = (arr, left, right, pivot) => {
  let [lessIndex, currIndex, greaterIndex] = [left, left, right];
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
  return currIndex-1;
};

module.exports = (arr, k) => {
  let [leftBound, rightBound] = [0, arr.length - 1];
  while (leftBound <= rightBound) {
    const randomIndex = leftBound + Math.floor(Math.random() * (rightBound - leftBound + 1));
    const pivot = arr[randomIndex];
    pivotIndex = partitionAndGetPivotIndex(arr, leftBound, rightBound, pivot);
    if (pivotIndex === arr.length - k) {
      return arr[pivotIndex];
    } else if (pivotIndex > arr.length - k) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
  }
};