const Node = require('../../util/LinkedList');

module.exports = (l1, l2) => {
  let tmp = new Node();
  let dummy = tmp;
  while (l1 && l2) {
    if (l1.data < l2.data) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  dummy.next = l1 ? l1 : l2;
  return tmp.next
};