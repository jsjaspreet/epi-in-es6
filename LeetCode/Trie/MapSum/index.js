module.exports = class MapSum {
  constructor() {
    this.words = new Map();
  }

  insert(key, val) {
    let currMap = this.words;
    for (const letter of key) {
      let newMap;
      if (currMap.has(letter)) {
        newMap = currMap.get(letter);
        let wordMap = newMap.get('words');
        wordMap.set(key, val);
      } else {
        newMap = new Map();
        let wordMap = new Map();
        wordMap.set(key, val);
        newMap.set('words', wordMap);
        currMap.set(letter, newMap);
      }
      currMap = newMap;
    }
  }

  sum(prefix) {
    let currMap = this.words;
    for (const letter of prefix) {
      if (currMap.has(letter)) {
        currMap = currMap.get(letter);
      } else {
        return 0;
      }
    }
    return [...currMap.get('words').values()].reduce((a, b) => a + b);
  }
};
