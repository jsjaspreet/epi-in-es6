module.exports = number => {
  let [left, right] = [0, number];
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let res = mid * mid;
    if (res === number) {
      return mid;
    } else if (res > number) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  console.log('left', left)
  return left - 1;
};