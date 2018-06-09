const test = require('ava');
const reverse = require('./');
const Node = require('../rawLL');


test('complex', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');

  a.next = b;
  b.next = c;
  c.next = d;

  const reversed = reverse(a);
  t.is(reversed.val, 'd');
  t.is(reversed.next.val, 'c');
  t.is(reversed.next.next.val, 'b');
  t.is(reversed.next.next.next.val, 'a');
  t.is(reversed.next.next.next.next, null);
});
