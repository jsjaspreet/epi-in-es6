const integerSquareRoot = require('./');
const test = require('ava');

test('16 => 4', t => {
  t.is(4, integerSquareRoot(16));
});

test('300 => 17', t => {
  t.is(17, integerSquareRoot(300));
});
