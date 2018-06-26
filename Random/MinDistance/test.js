const test = require('ava');
const d = require('./');

const printGrid = (grid) => {
  for (const row of grid) {
    console.log(row);
  }
};

test('simple', t => {
  const i = [[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]];

  const minDistance = d(i, 0, 2);

  t.is(6, minDistance);
});