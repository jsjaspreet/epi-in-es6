module.exports = schedule => {
  let isStart = true;
  let result = [];
  let i = 0;
  while (i < schedule.length) {
    if (isStart) {
      result.push(schedule[i++]);
      isStart = false;
    } else {
      if (i === schedule.length - 1) {
        result.push(schedule[i++]);
      } else {
        if (schedule[i + 1] - schedule[i] === 1) {
          i += 2;
        } else {
          result.push(schedule[i++]);
          isStart = true;
        }
      }
    }
  }
  return result;
};