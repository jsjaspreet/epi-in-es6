function* preorderTraverse(node) {
  if (!node) {
    return;
  }
  yield node.val;
  if (node.left) {
    yield* preorderTraverse(node.left);
  }
  if (node.right) {
    yield* preorderTraverse(node.right);
  }
}

module.exports = function (root) {
  return [...preorderTraverse(root)];
};