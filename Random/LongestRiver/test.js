const test = require('ava');
const LongestRiver = require('./');

test('simple', t => {
  const river = [
    [1, 1]
  ];
  const L = new LongestRiver(river);
  t.is(L.longestRiverSize(), 2);
});


test('complicated', t => {
  const river = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0]
  ];
  const L = new LongestRiver(river);
  t.is(L.longestRiverSize(), 9);
});

test('more complicated', t => {
  const river = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0]
  ];
  const L = new LongestRiver(river);
  t.is(L.longestRiverSize(), 6);
});

test('slightly more complicated', t => {
  const river = [
    [1, 1],
    [1, 1]
  ];
  const L = new LongestRiver(river);
  t.is(L.longestRiverSize(), 4);
});
