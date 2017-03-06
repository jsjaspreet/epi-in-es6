module.exports = function(L1, k) {
  let slow = L1
  let fast = L1
  for (let i = 0; i <= k; i++) {
    fast = fast.next
  }
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return L1
}