const test = require('ava')
const Node = require('../../util/LinkedList')
const containsCommon = require('./')

test('1->2, 3->2', t => {
  const x = new Node(1)
  const a = new Node(11)
  const y = new Node(2)
  const z = new Node(3)
  const d = new Node(4)
  a.next = x
  x.next = y
  y.next = d
  z.next = y
  t.true(containsCommon(x, z))
})

test('1->2, 3->4', t => {
  const a = new Node(11)
  const b = new Node(2)
  const c = new Node(3)
  const d = new Node(4)
  a.next = b
  c.next = d
  t.false(containsCommon(a, c))
})
