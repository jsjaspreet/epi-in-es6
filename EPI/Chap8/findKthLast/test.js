const test = require('ava')
const Node = require('../../util/LinkedList')
const kthLast = require('./')

//test('1->2->3, 0', t => {
//  const x = new Node(1)
//  const y = new Node(2)
//  const z = new Node(3)
//  x.next = y
//  y.next = z
//  const kth = kthLast(x, 0)
//  t.true(kth.data === 3)
//})

test('1->2->3, 1', t => {
  const x = new Node(1)
  const y = new Node(2)
  const z = new Node(3)
  x.next = y
  y.next = z
  const kth = kthLast(x, 1)
  t.true(kth.data === 2)
})
