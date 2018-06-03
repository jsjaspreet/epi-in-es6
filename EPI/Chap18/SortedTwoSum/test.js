const test = require('ava');
const twoSum = require('./');

test('single', t => {
  t.true(twoSum([2], 4));
});

test('test 1', t => {
  t.true(twoSum([1, 2, 6], 7));
});

test('test 2', t => {
  t.true(twoSum([1, 2, 6], 4));
});
