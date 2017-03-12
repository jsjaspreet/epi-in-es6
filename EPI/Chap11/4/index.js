// k closest items
const Heap = require('heap')

// [1, 2, 3, 4, 5, 6, 7], 3 => [1, 2, 3]
module.exports = function(starData, k) {
  const kClosest = new Heap((a, b) => b - a)
  for (const starDistance of starData) {
    if (kClosest.size() < k) {
      kClosest.push(starDistance)
    } else if (starDistance < kClosest.peek()) {
      kClosest.pop()
      kClosest.push(starDistance)
    }
  }
  return kClosest.toArray()
}