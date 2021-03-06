// 1 -> 2 -> 3
// 3 -> 2 -> 1
module.exports = function(head) {
  let prev = null
  let curr = head
  while (curr !== null) {
    let tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }
  return prev
}