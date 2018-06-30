function* inorder(node) {
  if (!node) {
    return;
  }
  yield* inorder(node.left);
  yield (node);
  yield* inorder(node.right);
}

module.exports = function (node) {
  let iter = inorder(node);
  let prev = iter.next();
  let next = iter.next();
  let headNode = prev.value;
  while (!next.done) {
    let prevNode = prev.value;
    let nextNode = next.value;
    prevNode.right = nextNode;
    nextNode.left = prevNode;
    prev = next;
    next = iter.next();
  }
  headNode.left = prev.value;
  prev.value.right = headNode;
  return headNode;
};