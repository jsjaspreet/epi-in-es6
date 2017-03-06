module.exports = function(LL, k) {
  let slow = LL
  let fast = LL
  for (let i = 0; i < k; i++) {
    fast = fast.next
    if (!fast) {
      // error
      return null
    }
  }
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}