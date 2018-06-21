function* helper(node) {
  if (!node) {
    return;
  }
  yield* helper(node.left);
  yield node.val;
  yield* helper(node.right);
}

module.exports = (node) => {
  return [...helper(node)];
};