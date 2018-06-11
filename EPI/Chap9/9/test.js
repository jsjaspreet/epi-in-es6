const test = require('ava');
const Node = require('../../util/BinaryTree');
const traverse = require('./');

test('simple', t => {
  const A = new Node(1);
  const B = new Node(2);
  const C = new Node(3);
  A.left = B;
  A.right = C;
  t.deepEqual([[1], [2, 3]], traverse(A));
});

test('complex', t => {
  const A = new Node(1);
  const B = new Node(2);
  const C = new Node(3);
  const D = new Node(4);
  const E = new Node(5);
  A.left = B;
  A.right = C;
  C.right = D;
  D.right = E;
  t.deepEqual([[1], [2, 3], [4], [5]], traverse(A));
});


test('more complex', t => {

  const a = new Node(314);
  const b = new Node(6);
  const c = new Node(271);
  const d = new Node(28);
  const e = new Node(0);
  const f = new Node(561);
  const g = new Node(3);
  const h = new Node(17);
  const i = new Node(6);
  const j = new Node(2);
  const k = new Node(1);
  const l = new Node(401);
  const m = new Node(641);
  const n = new Node(257);
  const o = new Node(271);
  const p = new Node(28);

  a.addLeft(b);
  a.addRight(i);
  i.addLeft(j);
  i.addRight(o);
  o.addRight(p);
  j.addRight(k);
  k.addLeft(l);
  k.addRight(n);
  l.addRight(m);
  b.addLeft(c);
  c.addLeft(d);
  c.addRight(e);
  b.addRight(f);
  f.addRight(g);
  g.addLeft(h);

  console.log(traverse(a));

  t.true(true);

});



