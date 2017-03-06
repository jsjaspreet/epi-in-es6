import height from './'
import test from 'ava'
import BinaryTree from '../../util/BinaryTree'

test('1 -> 2 -> 3', t => {
  let x = new BinaryTree(1)
  let y = new BinaryTree(1)
  let z = new BinaryTree(1)
  x.addLeft(y)
  y.addLeft(z)
  t.is(height(x), 2)
})