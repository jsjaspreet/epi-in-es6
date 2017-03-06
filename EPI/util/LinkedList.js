class Node {
  constructor(data=null) {
    this.data = data
    this.next = null
  }

  link(node) {
    this.next = node
  }
}

module.exports = Node

