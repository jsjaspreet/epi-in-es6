module.exports = function(hay, needle) {
  let lower = 0
  let upper = hay.length
  while (lower < upper) {
    let midpoint = lower + Math.floor((upper - lower) / 2)
    if (hay[midpoint] === needle) {
      return [true, midpoint]
    } else if (hay[midpoint] < needle) {
      lower = midpoint + 1
    } else {
      upper = midpoint
    }
  }
  return [false, null]
}