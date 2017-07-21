module.exports = class MaxStack {
  constructor() {
    this.items = [] // [[item, currMax]]
  }

  push(item) {
    const prevMax = this.items.length === 0 ? Number.NEGATIVE_INFINITY : this.items[0][1]
    const maxSoFar = Math.max(prevMax, item)
    this.items = [[item, maxSoFar], ...this.items]
  }

  pop() {
    if (this.items.length === 0) {
      throw new Error("Cannot pop empty stack")
    }
    const top = this.items.shift()
    return top[0]
  }

  peek() {
    if (this.items.length === 0) {
      throw new Error("Cannot peek empty stack")
    }
    const [top, ...rest] = this.items
    return top[0]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("No values in this stack")
    }
    const [top, ...rest] = this.items
    return top[1]
  }

}