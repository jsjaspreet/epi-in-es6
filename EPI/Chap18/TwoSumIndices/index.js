module.exports = (arr, target) => {
  let valueToIndex = new Map();
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let diff = target - currNum;
    if (valueToIndex.has(diff)) {
      return [valueToIndex.get(diff), i];
    }
    valueToIndex.set(currNum, i);
  }
  return [];
};