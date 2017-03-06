const Node = require('../util/LinkedList')
// Merge 2 Sorted Linked Lists
module.exports = function(L1, L2) {
  const L3 = new Node()
  while (L1 || L2) {
    if (L1 && L2) {
      if (L1.data < L2.data) {
        let newNode = new Node(L1.data)
        L3.next = newNode
        L1 = L1.next
      } else {
        let newNode = new Node(L2.data)
        L3.next = newNode
        L2 = L2.next
      }
    } else if (L2) {
      L3.next = L2.data
      L2 = L2.next
    } else {
      L3.next = L1.data
      L1 = L1.next
    }
  }
  return L3.next
}