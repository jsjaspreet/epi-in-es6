module.exports = function (intervals) {
  if (!intervals.length) {
    return [];
  }
  let currInterval = intervals[0];
  let result = [];
  for (let i = 1; i < intervals.length; i++) {
    let newInterval = intervals[i];
    if (newInterval[0] > currInterval[1]) {
      result.push(currInterval);
      currInterval = newInterval;
    } else {
      currInterval[1] = Math.max(currInterval[1], newInterval[1]);
    }
  }
  result.push(currInterval);
  return result;
};