const test = require('ava');
const isPalindrome = require('./');
const Node = require('../rawLL');

test('even false', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('b');
  const d = new Node('d');

  a.next = b;
  b.next = c;
  c.next = d;

  t.false(isPalindrome(a));
});

test('odd false', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('b');

  a.next = b;
  b.next = c;

  t.false(isPalindrome(a));
});

test('odd true', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('a');

  a.next = b;
  b.next = c;

  t.true(isPalindrome(a));
});

test('even true', t => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('b');
  const d = new Node('a');

  a.next = b;
  b.next = c;
  c.next = d;

  t.true(isPalindrome(a));
});
