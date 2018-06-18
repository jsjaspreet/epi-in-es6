function* postorderTraverse(node) {
  if (!node) {
    return;
  }

  if (node.left) {
    yield* postorderTraverse(node.left);
  }

  if (node.right) {
    yield* postorderTraverse(node.right);
  }
  yield node.val;

}

var postorderTraversal = function (root) {
  return [...postorderTraverse(root)];
};