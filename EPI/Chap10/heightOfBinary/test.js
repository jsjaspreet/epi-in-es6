import height from './three';
import test from 'ava';
import BinaryTree from '../../util/BinaryTree';

test('1', t => {
  let y = new BinaryTree(1);
  t.is(height(y), 0);
});


test('null', t => {
  t.is(height(null), 0);
});

test('1 -> 2 -> 3', t => {
  let x = new BinaryTree(1);
  let y = new BinaryTree(1);
  let z = new BinaryTree(1);
  x.addLeft(y);
  y.addLeft(z);
  t.is(height(x), 2);
});