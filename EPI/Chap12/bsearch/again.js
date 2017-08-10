module.exports = function(hay, needle) {
  let lower = 0
  let upper = hay.length
  while (lower < upper) {
    const midPt = lower + Math.floor((upper - lower) / 2)
    if (hay[midPt] === needle) {
      return [true, midPt]
    } else if (hay[midPt] < needle) {
      lower = midPt+1
    } else {
      upper = midPt
    }
  }
  return [false, null]
}