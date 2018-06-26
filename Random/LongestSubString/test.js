const test = require('ava');
const l = require('./');

test('simple', t => {
  const i = 'abcd';
  const o = l(i);
  t.is('abcd', o);
});

test('simple 2', t => {
  const i = 'fffabcdd';
  const o = l(i);
  t.is('fabcd', o);
});
