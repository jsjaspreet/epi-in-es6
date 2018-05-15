const test = require('ava');
const possibleCharacters = require('./index');

test('22', t => {
  t.deepEqual(['AA', 'AB', 'AC', 'BB', 'BA', 'BC', 'CA', 'CB', 'CC'].sort(), possibleCharacters(22).sort());
});


test('2', t => {
  t.deepEqual(['A', 'B', 'C'].sort(), possibleCharacters(2).sort());
});

