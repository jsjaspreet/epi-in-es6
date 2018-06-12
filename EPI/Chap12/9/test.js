const test = require('ava');
const kthLargest = require('./');

test('simple', t => {
  t.is(kthLargest([1, 2, 3, 4, 5, 6], 1), 6);
});

test('medium', t => {
  t.is(kthLargest([1, 2, 3, 4, 5, 6], 2), 5);
});

test('medium+', t => {
  t.is(kthLargest([2, 1, 6, 4, 5, 3], 3), 4);
});
