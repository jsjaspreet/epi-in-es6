const test = require('ava')
const isSymm = require('./')
const BinaryTree = require('../../util/BinaryTree')

test('symmetric', t => {
  const x = new BinaryTree(1)
  const y = new BinaryTree(2)
  const z = new BinaryTree(2)
  x.addLeft(y)
  x.addRight(z)
  t.true(isSymm(x))
})
test('symmetric2', t => {
  const x = new BinaryTree(1)
  t.true(isSymm(x))
})

test('symmetric', t => {
  const x = new BinaryTree(1)
  const y = new BinaryTree(2)
  const z = new BinaryTree(2)
  const a = new BinaryTree(2)
  x.addLeft(y)
  x.addRight(z)
  z.addRight(a)
  t.false(isSymm(x))
})

test('asymmetric', t => {
  const x = new BinaryTree(1)
  const y = new BinaryTree(2)
  const z = new BinaryTree(3)
  x.addLeft(y)
  x.addRight(z)
  t.false(isSymm(x))
})

