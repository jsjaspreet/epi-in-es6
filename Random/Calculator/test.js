const test = require('ava');
const c = require('./');
const N = require('../ListNode');

test('simple', t => {
  const add = new N('+');
  const three = new N('3');
  const four = new N('4');
  add.left = three;
  add.right = four;
  t.is(7, c(add));
});

test('complex', t => {
  const multiply = new N('*');
  const five = new N('5');
  const add = new N('+');
  const three = new N('3');
  const four = new N('4');
  add.left = three;
  add.right = four;
  multiply.left = add
  multiply.right = five
  t.is(35, c(multiply));
});
