// Dutch Partition, given an array and index i, partition such that A[i*] <= A[i] < A[i**]
const dutchPartition = function(array, index) {
  let lesser = []
  let greater = []
  let same = []
  let pivot = array[index]
  for (const entry of array) {
    if (entry < pivot) {
      lesser = [...lesser, entry]
    } else if (entry === pivot) {
      same = [...same, entry]
    } else {
      greater = [...greater, entry]
    }
  }
  return [...lesser, ...same, ...greater]
}

module.exports = dutchPartition
