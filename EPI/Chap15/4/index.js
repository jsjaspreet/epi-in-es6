function* reverseTraversal(node) {
  if (!node) {
    return;
  }
  yield* reverseTraversal(node.right);
  yield node.data;
  yield* reverseTraversal(node.left);
}

module.exports = (node, k) => {
  const reverseInorderTraverser = reverseTraversal(node, k);
  let result = [];
  for (let i = 0; i < k; i++) {
    const { done, value } = reverseInorderTraverser.next();
    if (done) {
      return result;
    }
    result.push(value);
  }
  return result
};