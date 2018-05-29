const Heap = require('heap');

class ArrayEntry {
  constructor(array, i) {
    this.array = array;
    this.arrayIndex = i;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.array.length;
  }

  next() {
    return [this.array[this.index++], this.arrayIndex];
  }
}

module.exports = function (...sortedArrays) {
  const arrayEntries = sortedArrays.map((array, arrayIndex) => new ArrayEntry(array, arrayIndex));
  const h = new Heap();
  for (const arrayEntry of arrayEntries) {
    if (arrayEntry.hasNext()) {
      h.push(arrayEntry.next());
    }
  }
  const sorted = [];
  while (!h.empty()) {
    const [nextSmallest, arrayIndex] = h.pop();
    sorted.push(nextSmallest);
    const parentArrayEntry = arrayEntries[arrayIndex];
    if (parentArrayEntry.hasNext()) {
      h.push(parentArrayEntry.next());
    }
  }
  return sorted;
};
