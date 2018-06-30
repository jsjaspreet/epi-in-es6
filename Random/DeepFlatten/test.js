const test = require('ava');
const flat = require('./recurse');

test('iter', t => {
  t.deepEqual([1, 2, 3, 4], flat([1, [2, 3], [[[4]]]]));
});