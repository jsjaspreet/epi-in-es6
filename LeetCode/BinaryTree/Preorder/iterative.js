module.exports = function (root) {
  if (!root) {
    return [];
  }
  let leftStack = [root];
  let rightStack = [];
  let result = [];
  while (leftStack.length !== 0 || rightStack.length !== 0) {
    let node;
    if (leftStack.length !== 0) {
      node = leftStack.shift();
    } else if (rightStack.length !== 0) {
      node = rightStack.shift();
    }
    result.push(node.val);
    if (node.left) {
      leftStack.push(node.left);
    }
    if (node.right) {
      rightStack.unshift(node.right);
    }
  }
  return result;
};