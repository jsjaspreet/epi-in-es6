function* calculateArrayDepths(arr, depth) {
  if (arr.length === 0) {
    yield depth;
  }

  for (const el of arr) {
    if (!Array.isArray(el)) {
      yield depth;
    } else {
      yield* calculateArrayDepths(el, depth + 1);
    }
  }
}

// O(1) Space Complexity for current max depth variable
// O(N) Time Complexity to traverse the full tree
module.exports = (arrString) => {
  const arr = JSON.parse(arrString);
  if (!Array.isArray(arr)) {
    throw new Error('Must pass an array');
  }
  let maxDepth = 1;
  for (const currMaxDepth of calculateArrayDepths(arr, 1)) {
    maxDepth = Math.max(maxDepth, currMaxDepth);
  }
  return maxDepth;
};
