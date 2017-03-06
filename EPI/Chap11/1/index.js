const Heap = require('heap')

class ArrayEntry {
  constructor(array, i) {
    this.array = array
    this.arrayIndex = i
    this.index = 0
    this.length = array.length
  }

  hasNext() {
    return this.index < this.length
  }

  next() {
    return [this.array[this.index++], this.arrayIndex]
  }
}

module.exports = function mergeSorted(...sortedArrays) {
  const arrayEntries = sortedArrays.map((array, index) => new ArrayEntry(array, index))
  const heap = new Heap()
  for(const arrayEntry of arrayEntries) {
    if (arrayEntry.hasNext()) {
      heap.push(arrayEntry.next())
    }
  }
  const sorted = []
  while (!heap.empty()) {
    const [lowest, arrayIndex] = heap.pop()
    const arrayEntry = arrayEntries[arrayIndex]
    sorted.push(lowest)
    if (arrayEntry.hasNext()) {
      heap.push(arrayEntry.next())
    }
  }
  return sorted
}