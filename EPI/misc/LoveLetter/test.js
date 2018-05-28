const test = require('ava');
const loveletter = require('./');

test('simple', t => {
  t.true(loveletter('this is', 'this is the newspaper'));
});

test('false', t => {
  t.false(loveletter('this is', 'this'));
});

test('again', t => {
  t.true(loveletter('this is the', 'this is the newspaper'));
});
