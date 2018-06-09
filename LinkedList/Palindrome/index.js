const reverse = require('../Reverse');

function getLength(node) {
  let currLength = 0;
  while (node) {
    currLength++;
    node = node.next;
  }
  return currLength;
}

module.exports = function isPalindrome(node) {
  const length = getLength(node);
  const midNodeIndex = Math.ceil(length / 2);
  const halfCheckLength = Math.floor(length / 2);
  let midNode = node;
  for (let i = 0; i < midNodeIndex; i++) {
    midNode = midNode.next;
  }
  let reversed = reverse(midNode);
  let curr = node;

  for (let i = 0; i < halfCheckLength; i++) {
    if (curr.val !== reversed.val) {
      return false;
    }
    curr = curr.next;
    reversed = reversed.next;
  }
  return true;
};
