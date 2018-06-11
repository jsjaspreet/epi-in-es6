const getDepth = (node) => {
  let currDepth = -1;
  let curr = node;
  while (curr) {
    currDepth++;
    curr = curr.parent;
  }
  return currDepth;
};

const bruteParent = (node1, node2) => {
  const [depth1, depth2] = [getDepth(node1), getDepth(node2)];
  let [deeperNode, shallowNode] = depth1 > depth2 ? [node1, node2] : [node2, node1];
  for (let i = 0; i < Math.abs(depth1 - depth2); i++) {
    deeperNode = deeperNode.parent;
  }
  while (deeperNode !== shallowNode) {
    deeperNode = deeperNode.parent;
    shallowNode = shallowNode.parent;
  }
  return deeperNode;
};

module.exports = {
  bruteParent
};