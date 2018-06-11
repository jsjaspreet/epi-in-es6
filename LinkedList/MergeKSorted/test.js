const test = require('ava');
const merge = require('./');
const ListNode = require('../rawLL');
const LinkToArray = require('../linkedToArray');

test('simple', t => {
  const l1 = new ListNode(1);
  const l2 = new ListNode(1);
  const l3 = new ListNode(2);
  const l4 = new ListNode(3);
  const l6 = new ListNode(5);

  l1.next = l3;
  l3.next = l6;
  l2.next = l4;

  const merged = merge([l1]);
  const arr = LinkToArray(merged);
  t.deepEqual(arr, [1, 2, 5]);
});

test('complex', t => {
  const l1 = new ListNode(1);
  const l2 = new ListNode(1);
  const l3 = new ListNode(2);
  const l4 = new ListNode(3);
  const l5 = new ListNode(4);
  const l6 = new ListNode(5);

  l1.next = l3;
  l3.next = l6;
  l2.next = l4;

  const merged = merge([l1, l2, l5]);
  const arr = LinkToArray(merged);
  t.deepEqual(arr, [1, 1, 2, 3, 4, 5]);
});