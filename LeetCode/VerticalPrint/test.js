const test = require('ava');
const vert = require('./BFS');
const Node = require('./ListNode');

test('simple', t => {
  const a = new Node(3);
  const b = new Node(2);
  const c = new Node(5);
  const d = new Node(6);
  const e = new Node(7);

  a.left = b;
  a.right = c;
  c.left = e;
  b.right = d;

  const o = vert(a);

  const expected = [[2], [3, 6, 7], [5]];
  t.deepEqual(o, expected);
});