class DoublyLinkedListNode {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  initialize(node) {
    this.head = node;
    this.tail = node;
    this.size = 1;
    return node;
  }

  deleteTail() {
    const oldTailData = this.tail.data;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
    return oldTailData;
  }

  get(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  append(data) {
    const node = new DoublyLinkedListNode(data);
    if (this.size === 0) {
      return this.initialize(node);
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.size++;
    return node;
  }

  unshift(data) {
    const node = new DoublyLinkedListNode(data);
    if (this.size === 0) {
      return this.initialize(node);
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.size++;
    return node;
  }

  delete(node) {
    if (node === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const prevNode = node.prev;
      const nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.size--;
  }
}


module.exports = DoublyLinkedList;
