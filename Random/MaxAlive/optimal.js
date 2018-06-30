function flatten(arr) {
  return [...helper(arr)];
}

function* helper(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      yield* helper(arr[i]);
    } else {
      yield arr[i];
    }
  }
}

module.exports = function (lives) {
  const events = new Map();
  for (const [birth, death] of lives) {
    if (events.has(birth)) {
      events.get(birth).birth++;
    } else {
      events.set(birth, { birth: 1, death: 0 });
    }
    if (events.has(death)) {
      events.get(death).death++;
    } else {
      events.set(death, { birth: 0, death: 1 });
    }
  }
  const eventYears = flatten(lives).sort((a, b) => a - b);
  let maxYear = null, max = 0, curr = 0;
  for (const eventYear of eventYears) {
    curr += events.get(eventYear).birth;
    curr -= events.get(eventYear).death;
    if (curr > max) {
      maxYear = eventYear;
      max = curr;
    }
  }
  return max;
};