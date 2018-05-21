const test = require('ava');
const { isEqual } = require('lodash');
const dutchPartition = require('./three');

test('[1, 2, 2, 10, 3]', t => {
  const A = [1, 2, 2, 10, 3];
  const partitioned = dutchPartition(A, 4);
  t.true(isEqual([1, 2, 2, 3, 10], partitioned));
});

