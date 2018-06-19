const test = require('ava');
const reducer = require('./');

test('simple', t => {
  const schedule = [0, 3, 4, 6, 8, 10];
  t.deepEqual(reducer(schedule), [0, 6, 8, 10]);
});

test('simple', t => {
  const schedule = [0, 3, 4, 6, 7, 10];
  t.deepEqual(reducer(schedule), [0, 10]);
});
