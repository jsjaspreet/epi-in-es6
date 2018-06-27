function* helper(node) {
  if (!node) {
    return;
  }
  yield* helper(node.left);
  yield* helper(node.right);
  yield node.val;
}

function postOrderTraversal(node) {
  return [...helper(node)];
}

module.exports = (tree) => {
  const postOrder = postOrderTraversal(tree);
  let left = eval(postOrder[0] + postOrder[2] + postOrder[1]);
  for (let i = 3; i < postOrder.length; i += 2) {
    let right = postOrder[i];
    let op = postOrder[i + 1];
    left = eval(left + op + right);
  }
  return left;
};