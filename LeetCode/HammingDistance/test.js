const test = require('ava');
const hd = require('./');

test('simple', t => {
  const x = 1;
  const y = 3;
  t.is(1, hd(x, y));
});