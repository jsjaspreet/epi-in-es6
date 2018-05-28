class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.dummyHead = new Node();
    this.tail = this.dummyHead;
    this.length = 0;
  }

  enqueue(data) {
    this.tail.next = new Node(data);
    this.tail = this.tail.next;
    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      this.dummyHead = this.dummyHead.next;
      this.length--;
      return this.dummyHead.data;
    }
  }

  size() {
    return this.length;
  }
};