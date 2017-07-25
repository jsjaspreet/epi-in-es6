const Heap = require('heap')

class ArrayEntry {
  constructor(array, i) {
    this.array = array
    this.arrayIndex = i
    this.index = 0
  }

  hasNext() {
    return this.index < this.array.length
  }

  next() {
    return [this.array[this.index++], this.arrayIndex]
  }
}

module.exports = function(...sortedArrays) {
  const H = new Heap()
  const arrayEntries = sortedArrays.map((array, index) => new ArrayEntry(array, index))
  for (const arrayEntry of arrayEntries) {
    if (arrayEntry.hasNext()) {
      H.push(arrayEntry.next())
    }
  }
  const sorted = []
  while (!H.empty()) {
    const [value, arrayIndex] = H.pop()
    sorted.push(value)
    const arrayEntry = arrayEntries[arrayIndex]
    if (arrayEntry.hasNext()) {
      H.push(arrayEntry.next())
    }
  }
  return sorted
}