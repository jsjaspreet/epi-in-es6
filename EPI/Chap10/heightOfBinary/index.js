function heightHelper(node) {
  if (!node) {
    return -1
  }
  return 1 + Math.max(heightHelper(node.left), heightHelper(node.right))
}


module.exports = function(node) {
  if (!node) {
    return 0
  }
  return 1 + Math.max(heightHelper(node.left), heightHelper(node.right))
}