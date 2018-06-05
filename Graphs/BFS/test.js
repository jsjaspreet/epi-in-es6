const test = require('ava');
const BFS = require('./');
const Node = require('../node');

test('simple', t => {
  const A = new Node(1);
  const B = new Node(2);
  const C = new Node(3);
  const D = new Node(4);
  A.addUndirectedEdge(B);
  B.addUndirectedEdge(C);
  C.addUndirectedEdge(D);
  t.true(BFS(A, D));
});


test('cycle', t => {
  const A = new Node(1);
  const B = new Node(2);
  const C = new Node(3);
  const D = new Node(4);
  const E = new Node(5);
  const F = new Node(6);
  const G = new Node(7);
  const H = new Node(8);
  const I = new Node(9);
  A.addUndirectedEdge(B);
  B.addUndirectedEdge(C);
  C.addUndirectedEdge(D);
  B.addUndirectedEdge(E);
  E.addUndirectedEdge(F);
  F.addUndirectedEdge(A);
  F.addUndirectedEdge(G);
  G.addUndirectedEdge(H);
  H.addUndirectedEdge(I);
  t.true(BFS(A, I));
});

test('unreachable', t => {
  const A = new Node(1);
  const B = new Node(2);
  const C = new Node(3);
  const D = new Node(4);
  const E = new Node(5);
  const F = new Node(6);
  const G = new Node(7);
  A.addUndirectedEdge(B);
  B.addUndirectedEdge(C);
  C.addUndirectedEdge(D);
  B.addUndirectedEdge(E);
  E.addUndirectedEdge(F);
  t.false(BFS(A, G));
});

test('simple 2', t => {
  const A = new Node(1);
  const B = new Node(2);
  const C = new Node(3);
  const D = new Node(4);
  const E = new Node(5);
  const F = new Node(6);
  A.addUndirectedEdge(B);
  B.addUndirectedEdge(C);
  C.addUndirectedEdge(D);
  B.addUndirectedEdge(E);
  E.addUndirectedEdge(F);
  t.true(BFS(A, F));
});
