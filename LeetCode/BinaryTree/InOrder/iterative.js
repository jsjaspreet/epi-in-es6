function inorderTraversal(root) {
  if (!root) {
    return [];
  }
  let stack = [];
  let curr = root;
  let result = [];
  while (true) {
    if (curr !== null) {
      stack.unshift(curr);
      curr = curr.left;
    } else {
      if (stack.length === 0) {
        break;
      }
      curr = stack.shift();
      result.push(curr.val);
      curr = curr.right;
    }
  }
  return result;
};
