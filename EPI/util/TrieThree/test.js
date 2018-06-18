const test = require('ava');
const Trie = require('./TrieThree');

test('simple 2', t => {
  const T = new Trie();
  T.addWord('cat');
  T.addWord('cart');
  t.deepEqual([], T.checkPrefix('cartt'));
});


test('simple 3', t => {
  const T = new Trie();
  T.addWord('cat');
  T.addWord('cart');
  t.true(T.hasWord('cat'));
});

test('simple', t => {
  const T = new Trie();
  T.addWord('cat');
  T.addWord('cart');
  t.deepEqual(['cat', 'cart'], T.checkPrefix('ca'));
});