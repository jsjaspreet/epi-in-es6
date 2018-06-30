const test = require('ava');
const numIslands = require('./');

test('islands', t => {
  const i = [[1, 1, 1, 0, 0], [1, 1, 0, 1, 1,], [1, 1, 0, 0, 0], [0, 0, 0, 0, 1]];
  const numI = numIslands(i);
  t.is(numI, 3);
});