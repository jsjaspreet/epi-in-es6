class Queue {
  constructor() {
    this.items = []
  }

  queue(item) {
    this.items = [...this.items, item]
  }

  dequeue() {
    const [first, ...rest] = this.items
    this.items = rest
    return first
  }

  isEmpty() {
    return this.items.length == 0
  }
}

module.exports = Queue
