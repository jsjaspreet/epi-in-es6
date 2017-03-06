// Dutch Partition, given an array and index i, partition such that A[i*] <= A[i] < A[i**]
module.exports = function(array, index) {
  let lesser = []
  let greater = []
  let same = []
  let pivot = array[index]
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (num < pivot) {
      lesser = [...lesser, num]
    } else if (num === pivot) {
      same = [...same, num]
    } else {
      greater = [...greater, num]
    }
  }
  return [...lesser, ...same, ...greater]
}