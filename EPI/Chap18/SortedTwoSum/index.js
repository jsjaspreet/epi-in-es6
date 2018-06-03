module.exports = (arr, target) => {
  let [first, second] = [0, arr.length - 1];
  while (first !== second) {
    const sum = arr[first] + arr[second];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      first++;
    } else {
      second--;
    }
  }
  const sum = arr[first] + arr[second];
  return sum === target;
};