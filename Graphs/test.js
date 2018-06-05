const test = require('ava');
const Node = require('./node');

test('connections', t => {
  const A = new Node(1);
  const B = new Node(2);
  A.addUndirectedEdge(B);
  t.true(B.children.length === 1);
  t.true(A.children.length === 1);
  t.true(A.children[0].id === 2);
  t.true(B.children[0].id === 1);
});

