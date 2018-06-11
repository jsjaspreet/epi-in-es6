const test = require('ava');
const intToBase = require('./');

test('simple', t => {
  t.is('F', intToBase(15, 16));
});