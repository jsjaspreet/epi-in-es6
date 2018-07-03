const test = require('ava');
const last = require('./');

test('simple', t => {
  const i = [1, 1, 1];
  t.is(2, last(i, 1));
});

test('not found', t => {
  const i = [1, 1, 1];
  t.is(-1, last(i, 4));
});

test('complex', t => {
  const i = [1, 1, 1, 4, 5, 7, 9, 9, 9, 10];
  t.is(i.length - 2, last(i, 9));
});
