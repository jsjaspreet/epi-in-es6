function symmetricHelper(node1, node2) {
  if (!node1 && !node2) {
    return true
  } else if (node1 && node2) {
    return node1.data === node2.data && symmetricHelper(node1.right, node2.left) &&
      symmetricHelper(node1.left, node2.right)
  }
  return false
}

module.exports = function isSymmetric(root) {
  return symmetricHelper(root.left, root.right)
}

