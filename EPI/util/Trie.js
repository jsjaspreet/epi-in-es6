module.exports = class Trie {
  constructor() {
    this.structure = new Map()
    this.allWords = []
  }

  addWord(word) {
    this.allWords.push(word)
    let currMap = this.structure
    for (const letter of word) {
      if (currMap.has(letter)) {
        currMap = currMap.get(letter)
        currMap.set("word", [...currMap.get("word"), word])
      } else {
        const newMap = new Map()
        newMap.set("word", [word])
        currMap.set(letter, newMap)
        currMap = newMap
      }
    }

  }

  checkPrefix(prefix) {
    if(prefix === "") {
      return this.allWords
    }
    let currMap = this.structure
    for (const letter of prefix) {
      if (currMap.has(letter)) {
        currMap = currMap.get(letter)
      } else {
        return []
      }
    }
    return currMap.get("word")
  }

}