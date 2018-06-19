const test = require('ava');
const allWords = require('./');

test('simple', t => {
  const dict = ['a', 'aa', 'aab'];
  const word = 'aaba';
  t.deepEqual(dict.sort(), allWords(word, dict).sort());
});