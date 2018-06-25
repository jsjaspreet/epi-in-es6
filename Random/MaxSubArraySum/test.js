const test = require('ava');
const sum = require('./');

test('simple', t => {
  const i = [1, 2, 3];
  const o = sum(i);
  t.is(6, o);
});

test('a little simple', t => {
  const i = [5, -20, -100, 1, 2, 3];
  const o = sum(i);
  t.is(6, o);
});

test('hard', t => {
  const i = [5, -20, -100, 1, 2, 3, -1000];
  const o = sum(i);
  t.is(6, o);
});

test('hard', t => {
  const i = [5, -20, -100, 1, 2, 3, -1000, 1000];
  const o = sum(i);
  t.is(1000, o);
});
