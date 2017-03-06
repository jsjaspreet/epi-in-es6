class BinaryTreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  addLeft(node) {
    this.left = node
  }

  addRight(node) {
    this.right = node
  }
}

module.exports = BinaryTreeNode
