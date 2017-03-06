class Stack {
  constructor() {
    this.items = []
    this.count = 0
    this.currMax = null
  }

  push(item) {
    this.count++
    if (!this.currMax || this.currMax < item) {
      this.currMax = item
    }
    this.items.push([item, this.currMax])
  }

  pop() {
    this.count--
    if (this.count == 0) {
      throw new Error("Unable to pop empty stack")
    }
    const item = this.items.pop()
    this.currMax = this.items.slice(-1)[0][1]
    return item[0]
  }

  peek() {
    if (this.count == 0) {
      throw new Error("Unable to peek empty stack")
    }
    return this.items.slice(-1)[0][0]
  }

  max() {
    return this.items.slice(-1)[0][1]
  }
}

module.exports = Stack