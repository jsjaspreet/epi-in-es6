function postorderTraversal(root) {
  if (!root) {
    return [];
  }
  let stack1 = [root];
  let stack2 = [];
  while (stack1.length !== 0) {
    let next = stack1.unshift();
    stack2.push(next.val);
    if (next.left) {
      stack1.unshift(next.left);
    }
    if (next.right) {
      stack1.unshift(next.right);
    }
  }
  return stack2.reverse();
};
