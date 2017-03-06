const test = require('ava')
const Node = require('../../util/LinkedList')
const deleteKthLast = require('./')
test('1->2->3, 1', t => {
  let a = new Node(1)
  let b = new Node(2)
  let c = new Node(3)
  a.next = b
  b.next = c
  const noB = deleteKthLast(a, 1)
  t.true(noB.next.data === 3)
})

