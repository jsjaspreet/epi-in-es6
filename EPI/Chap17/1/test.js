const test = require('ava');
const scoreCombos = require('./');

test('12', t => {
  t.is(scoreCombos(12), 4);
});