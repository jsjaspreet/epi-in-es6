const test = require('ava')
const merge = require('./')
const Node = require('../util/LinkedList')
const { isEqual } = require('lodash')

test('1, 2, 3', t => {
  const x = new Node(1)
  const y = new Node(2)
  const z = new Node(3)
  y.link(z)
  let merged = merge(x, z)
  t.true(isEqual([1, 2, 3], [merged.data, merged.next.data, merged.next.next.data]))
})

test('1, 2, 3, 4', t => {
  const x = new Node(1)
  const ss = new Node(4)
  x.link(ss)
  const y = new Node(2)
  const z = new Node(3)
  y.link(z)
  let merged = merge(x, z)
  t.true(isEqual([1, 2, 3, 4], [merged.data, merged.next.data, merged.next.next.data]))
})
