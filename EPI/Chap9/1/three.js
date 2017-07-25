module.exports = class MaxStack {
  constructor() {
    this.items = []
  }

  push(data) {
    if (this.isEmpty()) {
      this.items.unshift([data, data])
    } else {
      const currMax = Math.max(this.max(), data)
      this.items.unshift([data, currMax])
    }
  }

  pop() {
    const data = this.items.shift()
    return data[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  max() {
    if (!this.isEmpty()) {
      return this.items[0][1]
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0][0]
    }
  }

}