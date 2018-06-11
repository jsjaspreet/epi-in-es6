const test = require('ava')
const reverse = require('./three')
const Node = require('../../util/LinkedList')
const { isEqual } = require('lodash')

test('1, 2, 3', t => {
  const x = new Node(1)
  const y = new Node(2)
  const z = new Node(3)
  x.link(y)
  y.link(z)
  const reversed = reverse(x)
  t.true(isEqual([3, 2, 1, null], [reversed.data, reversed.next.data, reversed.next.next.data, reversed.next.next.next]))
})