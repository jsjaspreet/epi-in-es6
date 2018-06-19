const test = require('ava');
const editDistance = require('./');

test('simple', t => {
  t.is(3, editDistance('horse', 'ros'));
});