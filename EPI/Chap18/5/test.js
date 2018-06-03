const test = require('ava');
const threeSum = require('./');

test('[3, 2, 7, 5, 11], 21', t => {
  t.true(threeSum([3, 2, 7, 5, 11], 21));
});

test('[3, 2, 7, 5, 11], 29', t => {
  t.false(threeSum([3, 2, 7, 5, 11], 89));
});
