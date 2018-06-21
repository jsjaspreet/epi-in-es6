const test = require('ava');
const ListNode = require('../ListNode');
const inorder = require('./');


const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);

four.right = five;
four.left = two;
two.left = one;
two.right = three;


test('simple', t => {
  const traversal = inorder(four);
  t.deepEqual([1, 2, 3, 4, 5], traversal);
});

