const test = require('ava');
const LRU = require('./');

test('simple', t => {
  const cache = new LRU(3);
  t.is(cache.size, 0);
  cache.put(1);
  cache.put(2);
  cache.put(3);
  t.is(cache.size, 3);

  t.true(!!cache.get(1));
  t.true(!!cache.get(2));
  t.true(!!cache.get(3));
  t.false(!!cache.get(43));
  cache.put(4);

  //
  t.false(!!cache.get(1));
  t.true(!!cache.get(4));

  t.true(!!cache.get(2));
  t.true(!!cache.get(3));
  t.false(!!cache.get(43));
//
});
