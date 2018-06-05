class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  addAtHead(val) {
    const newHead = new LinkedListNode(val);
    if (this.size === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.size++;
  }

  addAtTail(val) {
    const newTail = new LinkedListNode(val);
    if (this.size === 0) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this.size++;
  };

  get(index) {
    if ((index + 1) > this.size || index < 0) {
      return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  deleteAtIndex(index) {
    if ((index + 1) > this.size || index < 0) {
      return null;
    }
    if (index === 0 && this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      if (curr.next === this.tail) {
        this.tail = curr;
        curr.next = null;
      } else {
        curr.next = curr.next.next;
      }
    }
    this.size--;
  };

  addAtIndex(index, val) {
    if (index > this.size) {
      return null;
    }
    if(index === 0 && this.size === 0) {
      return this.addAtHead(val)
    }
    const newNode = new LinkedListNode(val);
    if (index === this.size) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }

    this.size++;
  }
};