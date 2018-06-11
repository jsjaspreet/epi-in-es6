module.exports = (node) => {
  let [prev, curr] = [null, node];
  while (curr) {
    let tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }
  return prev;
};