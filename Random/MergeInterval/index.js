module.exports = (intervals, newInterval) => {
  let result = [];
  let i = 0;
  let mergedInterval = newInterval;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }


  while (i < intervals.length && intervals[i][0] <= mergedInterval[1]) {
    mergedInterval = [Math.min(mergedInterval[0], intervals[i][0]), Math.max(mergedInterval[1], intervals[i][1])];
    i++;
  }
  result.push(mergedInterval);

  while (i < intervals.length) {
    result.push(intervals[i++]);
  }

  return result;
};