// reverse a singly linked list
module.exports = function(head) {
  let prev = null,
    curr = head
  while (curr) {
    let tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }
  return prev
}