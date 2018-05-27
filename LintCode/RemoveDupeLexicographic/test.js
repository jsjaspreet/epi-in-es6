const test = require('ava');
const implementation = require('./');

test('cbacdcbc', t => {
  t.is(implementation('cbacdcbc'), 'acdb');
});