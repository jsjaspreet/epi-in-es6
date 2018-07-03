module.exports = (rotated, n) => {
  let i = 0, j = rotated.length - 1;
  while (i < j) {
    let mid = i + Math.floor((j - i) / 2);
    let midNum = rotated[midNum];
    if (midNum === n) {
      return mid;
    } else if (midNum >= rotated[i] && n < midNum) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return -1;
};