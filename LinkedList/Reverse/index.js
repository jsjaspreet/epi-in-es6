module.exports = (node) => {
  let [prev, curr, next] = [null, node, null];
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};