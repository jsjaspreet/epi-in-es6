const test = require('ava')
import BinaryTree from '../../util/BinaryTree'
const isBalanced = require('./')

test('1', t => {
  const b1 = new BinaryTree(1)
  t.true(isBalanced(b1))
})

test('1 = 2,3', t => {
  const b1 = new BinaryTree(1)
  const b2 = new BinaryTree(2)
  const b3 = new BinaryTree(3)
  b1.left = b2
  b1.right = b3
  t.true(isBalanced(b1))
})

test('1 = 2,3-4', t => {
  const b1 = new BinaryTree(1)
  const b2 = new BinaryTree(2)
  const b3 = new BinaryTree(3)
  const b4 = new BinaryTree(4)
  b1.left = b2
  b1.right = b3
  b3.right = b4
  t.true(isBalanced(b1))
})

test('1 = 2,3-4-BALOGNEY', t => {
  const b1 = new BinaryTree(1)
  const b2 = new BinaryTree(2)
  const b3 = new BinaryTree(3)
  const b4 = new BinaryTree(4)
  const b5 = new BinaryTree(5)
  const b6 = new BinaryTree(7)
  b1.left = b2
  b2.left = b5
  b2.right = b6
  b1.right = b3
  b3.right = b4
  t.true(isBalanced(b1))
})
