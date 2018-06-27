const test = require('ava');
const merge = require('./');

test('simple', t => {
  const intervals = [[1, 3], [6, 9]];
  const newInterval = [2, 5];
  const merged = merge(intervals, newInterval);
  t.deepEqual(merged, [[1, 5], [6, 9]]);
});

test('complex', t => {
  const intervals = [[1, 3], [5, 9]];
  const newInterval = [2, 5];
  const merged = merge(intervals, newInterval);
  t.deepEqual(merged, [[1, 9]]);
});