module.exports = function (nums) {
  let minSum = 0, currSum = 0, max = 0;
  nums.forEach((num) => {
    minSum = Math.min(minSum, currSum);
    currSum += num;
    max = Math.max(max, currSum - minSum);
  });
  return max;
};