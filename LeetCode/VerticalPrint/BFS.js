module.exports = function (root) {
  let queue = [[root, 0]];
  let min = Number.MAX_SAFE_INTEGER;
  let max = -Number.MAX_SAFE_INTEGER;
  let map = new Map();
  const addNode = ({ val }, col) => {
    if (map.has(col)) {
      map.get(col).push(val);
    } else {
      map.set(col, [val]);
    }
  };
  while (queue.length !== 0) {
    let [node, col] = queue.shift();
    min = Math.min(col, min);
    max = Math.max(col, max);
    addNode(node, col);
    if (node.left) {
      queue.push([node.left, col - 1]);
    }
    if (node.right) {
      queue.push([node.right, col + 1]);
    }
  }
  let res = [];
  for (let i = min; i <= max; i++) {
    res.push(map.get(i));
  }
  return res;
};