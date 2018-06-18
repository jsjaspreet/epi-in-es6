module.exports = class MapSum {
  constructor() {
    this.words = new Map();
    this.words.set('words', new Set());
  }

  processWord(map, remaining, origWord, depth) {
    if (remaining.length === 0) {
      map.get('words').add(origWord);
      return;
    }

    if (map.has('.')) {
      this.processWord(map.get('.'), remaining.substring(1), origWord, depth + 1);
    } else {
      const dotMap = new Map();
      dotMap.set('words', new Set());
      map.set('.', dotMap);
      this.processWord(dotMap, remaining.substring(1), origWord, depth + 1);
    }

    const firstLetter = remaining[0];

    if (map.has(firstLetter)) {
      this.processWord(map.get(firstLetter), remaining.substring(1), origWord, depth + 1);
    } else {
      const letterMap = new Map();
      letterMap.set('words', new Set());
      map.set(firstLetter, letterMap);
      this.processWord(letterMap, remaining.substring(1), origWord, depth + 1);
    }
  }

  addWord(word) {
    return this.processWord(this.words, word, word, 0);
  }

  search(word) {
    let currMap = this.words;
    for (const letter of word) {
      if (currMap.has(letter)) {
        currMap = currMap.get(letter);
      } else {
        return false;
      }
    }
    return currMap.get('words').size > 0;
  }
};
