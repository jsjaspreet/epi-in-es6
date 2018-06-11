function* traverse(node, level) {
  if (!node) {
    return;
  }
  yield [node.data, level];
  if (node.left) {
    yield* traverse(node.left, level + 1);
  }
  if (node.right) {
    yield* traverse(node.right, level + 1);
  }
}

module.exports = root => {
  const map = new Map();
  for (const [data, level] of traverse(root, 0)) {
    if (map.has(level)) {
      map.get(level).push(data);
    } else {
      map.set(level, [data]);
    }
  }
  return [...map.values()];
};