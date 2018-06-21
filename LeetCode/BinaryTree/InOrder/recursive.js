function* inorderTraverse(node) {
  if (!node) {
    return;
  }
  if (node.left) {
    yield* inorderTraverse(node.left);
  }
  yield node.val;
  if (node.right) {
    yield* inorderTraverse(node.right);
  }
}

module.exports = function (root) {
  return [...inorderTraverse(root)];
};