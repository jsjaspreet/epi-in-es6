const test = require('ava');
const SearchWord = require('./');

test('simple', t => {
  const S = new SearchWord();
  S.addWord('cat');
  t.true(S.search('cat'));
});

test('comp', t => {
  const S = new SearchWord();
  S.addWord('cat');
  t.true(S.search('c..'));
});

test('comp 5', t => {
  const S = new SearchWord();
  S.addWord('cat');
  t.true(S.search('.at'));
});


test('comp 3', t => {
  const S = new SearchWord();
  S.addWord('cat');
  t.false(S.search('c.t.'));
});

test('depth', t => {
  const S = new SearchWord();
  S.addWord('cat');
  t.false(S.search('c.'));
});

test('comp 2', t => {
  const S = new SearchWord();
  S.addWord('cat');
  t.true(S.search('c.t'));
});
