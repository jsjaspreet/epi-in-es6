Array.prototype.rotate = function(n) {
  return this.slice(n, this.length).concat(this.slice(0, n))
}

class CircularQueue {
  constructor(length) {
    this.items = Array.from('x'.repeat(length))
    this.arrayLength = length
    this.numItems = 0
    this.head = 0
    this.tail = 0
  }

  queue(item) {
    if (this.numItems == this.arrayLength) {
      this.items = this.items.rotate(this.head)
      this.head = 0
      this.tail = this.numItems
      this.items = Array.from(this.items.concat(Array.from("x".repeat(this.arrayLength))))
      this.arrayLength *= 2
    }
    this.items[this.tail] = item
    this.tail = (this.tail + 1) % this.arrayLength
    ++this.numItems
  }

  dequeue() {
    if (this.numItems !== 0) {
      this.numItems--
      let item = this.items[this.head]
      this.head = (this.head + 1) % this.arrayLength
      return item
    }
    throw new Error("Balogney")
  }

}

module.exports = CircularQueue