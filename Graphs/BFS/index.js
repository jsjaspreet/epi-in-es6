module.exports = (start, end) => {
  let queue = [start];
  const seen = new Set();
  while (queue.length !== 0) {
    const nextNode = queue.shift();
    seen.add(nextNode.id);
    if (nextNode.id === end.id) {
      return true;
    }
    for (const child of nextNode.children) {
      if (!seen.has(child.id)) {
        queue.unshift(child);
      }
    }
  }
  return false;
};