module.exports = class Trie {
  constructor() {
    this.words = new Map();
  }

  addWord(word) {
    let currMap = this.words;
    for (const letter of word) {
      // if the letter exists
      let newMap;
      if (currMap.has(letter)) {
        // add the word to that prefix
        newMap = currMap.get(letter);
        const words = newMap.get('words');
        newMap.set('words', [...words, word]);
      } else {
        // set a new prefix route
        newMap = new Map();
        newMap.set('words', [word]);
        currMap.set(letter, newMap);
      }
      currMap = newMap;
    }
  }

  checkPrefix(word) {
    let currMap = this.words;
    for (const letter of word) {
      if (currMap.has(letter)) {
        currMap = currMap.get(letter);
      } else {
        return [];
      }
    }
    return currMap.get('words');
  }
};