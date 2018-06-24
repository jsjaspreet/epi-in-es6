const test = require('ava');
const Node = require('./ListNode');
const insert = require('./');

const toArray = (head, n) => {
  const result = [];
  while (n) {
    const nextVal = head.val;
    result.push(nextVal);
    head = head.next;
    n--;
  }
  return result;
};

test('simple 2', t => {
  const a = new Node(1);
  const b = new Node(3);
  const c = new Node(4);

  a.next = b;
  b.next = c;
  c.next = a;

  insert(b, 2);

  const o = toArray(a, 4);

  t.deepEqual([1, 2, 3, 4], o);
});

test('simple', t => {
  const a = new Node(1);
  const b = new Node(3);
  const c = new Node(4);

  a.next = b;
  b.next = c;
  c.next = a;

  insert(b, 6);

  const o = toArray(a, 4);

  t.deepEqual([1, 3, 4, 6], o);
});