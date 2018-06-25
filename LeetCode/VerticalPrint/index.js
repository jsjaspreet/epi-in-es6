function inorder(node, map, currPos) {
  if (!node) {
    return;
  }
  const currVal = node.val;
  if (map.has(currPos)) {
    const list = map.get(currPos);
    list.push(currVal);
    map.set(currPos, list);
  } else {
    map.set(currPos, [currVal]);
  }
  inorder(node.left, map, currPos - 1);
  inorder(node.right, map, currPos + 1);
}


module.exports = function verticalPrint(node) {
  const map = new Map();
  inorder(node, map, 0);
  let min = 0, max = 0;
  for (const key of map.keys()) {
    min = Math.min(key, min);
    max = Math.max(key, max);
  }
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(map.get(i));
  }
  return result;
};