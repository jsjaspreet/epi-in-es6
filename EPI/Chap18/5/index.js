const TwoSum = require('../SortedTwoSum');

module.exports = (arr, target) => {
  for (const num of arr) {
    if (TwoSum(arr, target - num)) {
      return true;
    }
  }
  return false;
};