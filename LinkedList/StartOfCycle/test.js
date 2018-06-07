const test = require('ava');
const CycleStart = require('./');
const Node = require('../rawLL');


test('complex', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  const g = new Node('g');
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = d;

  const start = CycleStart(a);
  t.is(start.val, 'd');
});

test('simple', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = c;

  const start = CycleStart(a);
  t.is(start.val, 'c');
});