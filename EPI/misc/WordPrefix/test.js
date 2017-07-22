const Trie = require('../../util/Trie')
const test = require('ava')
const { isEqual } = require('lodash')

test('Prefix([aa, a, aard], aa) => [aa, aard] ', t => {
  const wordList = ['aa', 'a', 'aard']
  const T = new Trie()
  for (const word of wordList) {
    T.addWord(word)
  }
  t.true(isEqual(T.checkPrefix('aa'), wordList.filter(word => word.startsWith('aa'))))
})
