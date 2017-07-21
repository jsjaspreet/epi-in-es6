module.exports = function(head) {
  if (!head.next || !head.next.next) {
    return false
  }
  let slow = head
  let fast = head.next.next
  while (slow !== fast) {
    slow = slow.next
    if (!fast.next || !fast.next.next) {
      return false
    }
    fast = fast.next.next
  }
  return true
}