const test = require('ava');
const knapsack = require('./');

test.skip('simple', t => {
  const items = [10, 35, 20, 9];
  const money = 40;
  t.deepEqual([10, 20, 9].sort(), knapsack(items, money).sort());
});

test('exact', t => {
  const items = [10, 36];
  const money = 36;
  t.deepEqual([36].sort(), knapsack(items, money).sort());
});
