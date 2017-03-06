// Detect cycle
module.exports = function(head) {
  if (head.next == null || head.next.next == null) {
    return false
  }
  let slow = head
  let fast = head.next.next
  while (slow !== fast) {
    slow = slow.next
    if (fast.next == null || fast.next.next == null) {
      return false
    }
    fast = fast.next.next
  }
  return true
}