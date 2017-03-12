const Heap = require('heap')
module.exports = function(ksortedArray, k) {
  const heap = new Heap()
  const length = ksortedArray.length
  for (let i = 0; i < k; i++) {
    heap.push(ksortedArray[i])
  }
  let heapPointer = k
  const collector = []
  for (let i = 0; i < length; i++) {
    let item = heap.pop()
    collector.push(item)
    if (heapPointer != length) {
      heap.push(ksortedArray[heapPointer++])
    }
  }
  return collector
}