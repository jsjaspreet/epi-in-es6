function* preorderTraverse(node) {
  if (!node) {
    return;
  }
  if (node.left) {
    yield* preorderTraverse(node.left);
  }
  yield node.val;
  if (node.right) {
    yield* preorderTraverse(node.right);
  }
}

module.exports = function (root) {
  return [...preorderTraverse(root)];
};