class BinaryTreeWithParent {
  constructor(data) {
    this.parent = null
    this.data = data
    this.left = null
    this.right = null
  }

  addLeft(node) {
    this.left = node
    node.parent = this
  }

  addRight(node) {
    this.right = node
    node.parent = this
  }
}

module.exports = BinaryTreeWithParent