function height(node) {
  if (!node) {
    return -1;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

function balancedHelper(root) {
  if (!root) {
    return true;
  }
  return Math.abs(height(root.left) - height(root.right)) <= 1 && balancedHelper(root.left) &&
    balancedHelper(root.right);
}

// test whether a tree is balanced
module.exports = balancedHelper;
