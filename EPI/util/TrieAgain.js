module.exports = class Trie {
  constructor() {
    this.data = new Map()
    this.words = new Set()
  }

  addWord(word) {
    if(this.words.has(word)) return
    this.words.add(word)
    let currMap = this.data
    for()

  }

  checkPrefix() {

  }
}