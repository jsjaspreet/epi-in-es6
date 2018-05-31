const test = require('ava');
const wordCountEngine = require('./');

const d = 'Practice makes perfect. you\'ll only get Perfect by practice. just practice!';

test('first', t => {
  t.deepEqual(wordCountEngine(d), [['practice', '3'], ['perfect', '2'],
    ['makes', '1'], ['youll', '1'], ['only', '1'],
    ['get', '1'], ['by', '1'], ['just', '1']]);
});