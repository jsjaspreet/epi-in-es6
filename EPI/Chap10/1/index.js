const height = require('../heightOfBinary')

function balancedHelper(node) {
  if (!node) {
    return true
  }
  return Math.abs(height(node.left) - height(node.right)) <= 1 && balancedHelper(node.left) &&
    balancedHelper(node.right)
}
// Test whether a tree is balanced
module.exports = function(root) {
  return Math.abs(height(root.left) - height(root.right)) <= 1 && balancedHelper(root.left) &&
    balancedHelper(root.right)
}