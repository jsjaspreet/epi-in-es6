const test = require('ava');
const d = require('./');

const printGrid = (grid) => {
  for (const row of grid) {
    console.log(row);
  }
};

test('simple', t => {
  const i = [[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]];

  printGrid(i);

  d(i);


  printGrid(i);
});