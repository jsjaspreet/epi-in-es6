function heightOfBinary(node) {
  if (!node) {
    return -1
  }
  return 1 + Math.max(heightOfBinary(node.left), heightOfBinary(node.right))
}

module.exports = heightOfBinary