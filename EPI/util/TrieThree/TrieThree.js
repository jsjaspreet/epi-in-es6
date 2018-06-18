module.exports = class Trie {
  constructor() {
    this.words = new Map();
  }

  addWord(word) {
    let currMap = this.words;
    for (const letter of word) {
      let newMap;
      if (currMap.has(letter)) {
        newMap = currMap.get(letter);
        let wordSet = newMap.get('words');
        wordSet.add(word);
      } else {
        newMap = new Map();
        let wordSet = new Set([word]);
        newMap.set('words', wordSet);
        currMap.set(letter, newMap);
      }
      currMap = newMap;
    }
  }

  getWordSet(prefix) {
    let currMap = this.words;
    for (const letter of prefix) {
      if (currMap.has(letter)) {
        currMap = currMap.get(letter);
      } else {
        return new Set();
      }
    }
    return currMap.get('words');
  }

  checkPrefix(prefix) {
    return [...this.getWordSet(prefix)];
  }

  hasWord(word) {
    return this.getWordSet(word).has(word);
  }
};