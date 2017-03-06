class Queue {
  constructor() {
    this.items = []
  }

  queue(item) {
    this.items = [...this.items, item]
  }

  dequeue() {
    const item = this.items[0]
    this.items = this.items.slice(1)
    return item
  }

  isEmpty() {
    return this.items.length == 0
  }
}

module.exports = Queue
