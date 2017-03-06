const test = require('ava')
const Node = require('../../util/LinkedList')
const hasCycle = require('./')

test('1->2', t => {
  const x = new Node(1)
  const y = new Node(2)
  x.link(y)
  t.false(hasCycle(x))
})

test('1->2->3->4->5->2', t => {
  const a = new Node(1)
  const b = new Node(2)
  const c = new Node(3)
  const d = new Node(4)
  const e = new Node(5)
  a.link(b)
  b.link(c)
  c.link(d)
  d.link(e)
  e.link(b)
  t.true(hasCycle(a))
})


test('1->2->3->4->5', t => {
  const a = new Node(1)
  const b = new Node(2)
  const c = new Node(3)
  const d = new Node(4)
  const e = new Node(5)
  a.link(b)
  b.link(c)
  c.link(d)
  d.link(e)
  t.false(hasCycle(a))
})
