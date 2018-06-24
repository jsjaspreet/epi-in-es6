const ListNode = require('./ListNode');

module.exports = (head, val) => {
  if (!head) {
    return new ListNode(val);
  }
  let prev = head;
  let next = head.next;
  let inserted = false;
  while (true) {
    if ((prev.val <= val && next.val >= val) ||
      (prev.val > next.val && val > prev.val) ||
      (prev.val > next.val && val < next.val)) {
      prev.next = new ListNode(val, next);
      inserted = true;
      break;
    }
    prev = prev.next;
    next = next.next;
    if (prev === next) {
      break;
    }
  }

  if (!inserted) {
    prev.next = new ListNode(val, next);
  }
};