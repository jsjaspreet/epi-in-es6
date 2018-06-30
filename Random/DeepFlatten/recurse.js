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

module.exports = flatten;