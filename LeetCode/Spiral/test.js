const test = require('ava');
const spiral = require('./');

test('spiral', t => {
  const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const spiraled = spiral(input);
  t.deepEqual([1, 2, 3, 6, 9, 8, 7, 4, 5], spiraled);
});

test('horizontal', t => {
  const input = [[1, 2, 3]]
  const spiraled = spiral(input);
  t.deepEqual(input[0], spiraled);
});

test('dub vertical', t => {
  const input = [[1, 2], [6, 3], [5, 4]]
  const spiraled = spiral(input);
  t.deepEqual([1, 2, 3, 4, 5, 6], spiraled);
});


test('vertical', t => {
  const input = [[1], [2], [3]]
  const spiraled = spiral(input);
  t.deepEqual([1, 2, 3], spiraled);
});
