const Node = require('../../util/LinkedList')

module.exports = function(L1, L2) {
  let head, tail
  while (L1 !== null || L2 !== null) {
    if (L1 === null) {
      if (!head) {
        return L2
      }
      tail.next = L2
      break
    }
    if (L2 === null) {
      if (!head) {
        return L1
      }
      tail.next = L1
      break
    }

    if (L1.data < L2.data) {
      const newNode = new Node(L1.data)
      if (!head) {
        head = newNode
        tail = newNode
      }
      tail.next = newNode
      tail = tail.next
      L1 = L1.next
    } else {
      const newNode = new Node(L2.data)
      if (!head) {
        head = newNode
        tail = newNode
      }
      tail.next = newNode
      tail = tail.next
      L2 = L2.next
    }
  }
  return head
}