module.exports = function (nums) {
  let [lo, hi] = [0, nums.length - 1];
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let num = nums[mid];
    if (num > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return nums[lo];
};