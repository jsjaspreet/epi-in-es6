const test = require('ava');
const deleteDups = require('./index');

test('[1, 1, 1]', t => {
  t.deepEqual([1], deleteDups([1, 1, 1]));
});

test('[1, 2, 3]', t => {
  t.deepEqual([1, 2, 3], deleteDups([1, 2, 3]));
});

test('[]', t => {
  t.deepEqual([], deleteDups([]));
});

test('[1, 1, 22, 22, 45, 45]', t => {
  t.deepEqual([1, 22, 45], deleteDups([1, 1, 22, 22, 45, 45]));
});


