const test = require('ava');
const twoSum = require('./');

test('single', t => {
  t.deepEqual([0, 1], twoSum([2, 7, 11, 15], 9))
});

