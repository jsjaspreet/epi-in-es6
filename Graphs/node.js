class Node {
  constructor(id) {
    this.id = id;
    this.children = [];
  }

  addUndirectedEdge(node) {
    this.children.push(node);
    node.children.push(this);
  }

}

module.exports = Node;