class Node {
  constructor(data=null) {
    this.data = data
    this.next = null
  }

  set(data) {
    this.data = data
  }

  link(node) {
    this.next = node
  }
}

module.exports = Node

