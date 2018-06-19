const test = require('ava');
const kLargest = require('./');
const Node = require('../BinaryTree');

test('simple', t => {
  const a = new Node(1);
  const b = new Node(5);
  const c = new Node(10);
  const d = new Node(20);
  const e = new Node(7);
  const f = new Node(50);
  const g = new Node(15);
  a.right = b;
  b.right = c;
  c.right = d;
  c.left = e;
  d.left = g;
  d.right = f;
  const fiveLargest = kLargest(a, 5);
  t.deepEqual([7, 10, 20, 15, 50].sort(), fiveLargest.sort());
});


test('simple', t => {
  const a = new Node(1);
  const b = new Node(5);
  const c = new Node(10);
  const d = new Node(20);
  const e = new Node(15);
  a.right = b;
  b.right = c;
  c.right = d;
  c.left = e;
  const threeLargest = kLargest(a, 3);
  t.deepEqual([20, 10, 15].sort(), threeLargest.sort());
});
