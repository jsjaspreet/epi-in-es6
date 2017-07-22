module.exports = class Trie {
  constructor() {
    this.structure = new Map()
    this.allWords = new Set()
  }

  addWord(word) {
    if (this.allWords.has(word)) {
      return
    }
    this.allWords.add(word)

    let currMap = this.structure
    for (const letter of word) {
      let newMap
      if (currMap.has(letter)) {
        newMap = currMap.get(letter)
        newMap.set("word", [...newMap.get("word"), word])
      } else {
        newMap = new Map()
        newMap.set("word", [word])
        currMap.set(letter, newMap)
      }
      currMap = newMap
    }

  }

  checkPrefix(prefix) {
    if (prefix === "") {
      return [...this.allWords]
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