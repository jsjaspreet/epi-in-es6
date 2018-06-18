const test = require('ava');
const MapSum = require('./');

test('simple', t => {
  const M = new MapSum;
  M.insert('apple', 3);
  M.insert('app', 2);
  t.is(M.sum('app'), 5);
});