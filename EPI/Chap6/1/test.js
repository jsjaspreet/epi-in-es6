const test = require('ava');
const { isEqual } = require('lodash');
const dutchPartition = require('./whiteboard');


test('[1, 2, 2, 10, 3] 10', t => {
  const A = [1, 2, 2, 10, 3];
  const partitioned = dutchPartition(A, 10);
  t.deepEqual([1, 2, 2, 3, 10].sort(), partitioned.sort())
});


test('[1, 2, 2, 10, 3]', t => {
  const A = [1, 2, 2, 10, 3];
  const partitioned = dutchPartition(A, 3);
  t.true(isEqual([1, 2, 2, 3, 10], partitioned));
});


test('dupes', t => {
  const A = [1, 2, 2, 10, 3, 4, 4, 4];
  const partitioned = dutchPartition(A, 4);
  t.true(isEqual([1, 2, 2, 3, 4, 4, 4, 10], partitioned));
});

