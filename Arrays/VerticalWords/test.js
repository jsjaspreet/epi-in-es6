const test = require('ava');
const getVertical = require('./');

test('missing bottom right', t => {
  const input = ['abcd', 'bnrt', 'crm', 'dt'];
  t.deepEqual(getVertical(input), input);
});


test('not N by N', t => {
  const input = ['dog', 'bat', 'ate', 'sat'];
  t.deepEqual(getVertical(input), ['dbas', 'oata', 'gtet']);
});


test('not a word square', t => {
  const input = ['dog', 'bat', 'ate'];
  t.deepEqual(getVertical(input), ['dba', 'oat', 'gte']);
});

test('first', t => {
  const input = ['ball', 'area', 'lead', 'lady'];
  t.deepEqual(getVertical(input), input);
});