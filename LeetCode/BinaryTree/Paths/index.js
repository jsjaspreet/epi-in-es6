function* helper(node, str) {
  if (!node) {
    return;
  }

  let newStr = str.length === 0 ? `${node.val}` : `${str}->${node.val}`;

  if (!node.left && !node.right) {
    yield newStr;
  } else {
    yield* helper(node.right, newStr);
    yield* helper(node.left, newStr);
  }
}

module.exports = node => {
  return [...helper(node, '')];
};