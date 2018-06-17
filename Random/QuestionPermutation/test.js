const test = require('ava');
const perm = require('./');

test('simple 1', t => {
  t.deepEqual(['1'], perm('1'));
});

test('simple', t => {
  t.deepEqual(['0', '1'], perm('?'));
});
test('simple 2', t => {
  t.deepEqual(['01'], perm('01'));
});

test('simple 4', t => {
  t.deepEqual(['00', '01', '10', '11'], perm('??'));
});


test('simple 3', t => {
  t.deepEqual(['00', '01'], perm('0?'));
});
