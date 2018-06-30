const test = require('ava');
const traverse = require('./');
const Node = require('../../BinaryNode');

test('null', t => {
  const paths = traverse();
  t.deepEqual([], paths);
});

test('one', t => {
  const one = new Node(1);

  const paths = traverse(one);
  t.deepEqual(["1"], paths);
});

test('simple', t => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);

  one.left = two;
  one.right = three;
  three.left = four;

  const paths = traverse(one);
  t.deepEqual(["1->3->4", "1->2"].sort(), paths.sort());
});