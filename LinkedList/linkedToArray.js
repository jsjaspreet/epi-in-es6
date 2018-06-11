module.exports = (node) => {
  let result = [];
  let curr = node;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
};