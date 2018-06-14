const DLL = require('../../../LinkedList/DoublyLinked');

class LRU {
  constructor(size) {
    this.maxSize = size;
    this.size = 0;
    this.DLL = new DLL();
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return null;
    }
    const node = this.map.get(key);
    this.DLL.delete(node);
    this.DLL.unshift(node.data);
    this.map.set(key, this.DLL.head);
    return node.data;
  }

  put(data) {
    if (this.size === this.maxSize) {
      const key = this.DLL.deleteTail();
      this.map.delete(key);
      this.size--;
    }
    const node = this.DLL.unshift(data);
    this.map.set(data, node);
    this.size++;
  }

  delete(data) {
    if (!this.map.has(data)) {
      return false;
    }
    const node = this.map.get(data);
    this.DLL.delete(node);
    this.map.delete(data);
    this.size--;
    return true;
  }
}

module.exports = LRU;