module.exports = function height(node) {
  if (!node || (!node.left && !node.right)) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
};