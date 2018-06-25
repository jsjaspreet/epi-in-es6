const test = require('ava');
const w = require('./');

test('simple22', t => {
  const s = 'ADOBECODEBANC';
  const l = 'ABC';
  const o = 'BANC';

  const aO = w(s, l);
  t.is(o, aO);
});

test('simple11', t => {
  const s = 'a';
  const l = 'aa';
  const o = '';

  const aO = w(s, l);
  t.is(o, aO);
});
