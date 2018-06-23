const test = require('ava');
const game = require('./');

test('simple', t => {
  const i = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ];
  const o = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0]
  ];

  const testOutput = game(i);
  // for (const row of testOutput) {
  //   console.log(row);
  // }

  t.deepEqual(o, testOutput);
});