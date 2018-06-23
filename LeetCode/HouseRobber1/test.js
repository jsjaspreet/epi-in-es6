const test = require('ava');
const robber = require('./');

test('test', t => {
  const i = [2, 3, 2];
  t.is(4, robber(i));
});