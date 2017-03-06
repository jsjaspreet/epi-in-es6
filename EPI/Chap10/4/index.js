function bruteParent(nodeA, nodeB) {
  // traverse from node A to root
  const traversal = []

  while (nodeA !== null) {
    traversal.push(nodeA)
    nodeA = nodeA.parent
  }
  while (nodeB !== null) {
    if (traversal.includes(nodeB)) {
      return nodeB
    }
    nodeB = nodeB.parent
  }
  return null
}

module.exports = { bruteParent }