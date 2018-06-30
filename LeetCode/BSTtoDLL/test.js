const test = require('ava');
const Node = require('../BinaryNode');
const convert = require('./');

test('simple', t => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  four.left = two;
  four.right = five;
  two.left = one;
  two.right = three;

  const DLL = convert(four);
  const l = [
    DLL.val,
    DLL.right.val,
    DLL.right.right.val,
    DLL.right.right.right.val,
    DLL.right.right.right.right.val,
    DLL.right.right.right.right.right.val,
    DLL.right.right.right.right.right.left.val,
    DLL.right.right.right.right.right.left.left.val,
  ];
  t.deepEqual([1, 2, 3, 4, 5, 1, 5, 4], l);

});