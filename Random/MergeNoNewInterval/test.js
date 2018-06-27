const test = require('ava');
const merge = require('./');

test('simple', t => {
  const i = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const o = [[1, 6], [8, 10], [15, 18]];
  const aO = merge(i);

  t.deepEqual(o, aO);

});


test('discrete', t => {
  const i = [[1, 4], [5, 8]];
  const aO = merge(i);

  t.deepEqual(i, aO);
});

test('another', t => {
  const i = [[1, 4], [4, 5]];
  const o = [[1, 5]];
  const aO = merge(i);

  t.deepEqual(o, aO);
});