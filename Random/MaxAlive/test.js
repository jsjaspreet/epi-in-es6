const test = require('ava');
const maxYear = require('./ultraOptimal');

test('simple', t => {
  t.is(1, maxYear([[2000, 2010]]));
});

test('no overlap', t => {
  t.is(1, maxYear([[2000, 2010], [2020, 2040]]));
});

test('touch overlap', t => {
  t.is(1, maxYear([[2000, 2010], [2010, 2040]]));
});

test('true overlap', t => {
  t.is(2, maxYear([[2000, 2010], [2009, 2040]]));
});
