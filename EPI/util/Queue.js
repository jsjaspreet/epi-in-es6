class Queue {
  constructor() {
    this.items = []
  }

  queue(item) {
    this.items.push(item)
  }

  dequeue() {
    if (this.items.length === 0) {
      throw new Error("Cannot dequeue on an empty queue")
    }
    return this.items.shift()
  }

  isEmpty() {
    return this.items.length == 0
  }
}

module.exports = Queue
