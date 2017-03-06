// Sudoku Checker

// Check all the constraints:
// check each row,
// check each column,
// check each subregion
// Use a helper function, given 9 element list, see if its valid or not

// Only useful code here is ^, the helper function for checking whether a 9 selection works
module.exports = function(selection) {
  let numZeros = 0
  const numSet = new Set()
  for (const number of selection) {
    if (number === 0) {
      numZeros++
    } else {
      numSet.add(number)
    }
  }
  return numSet.size === 9 || (numSet.size + numZeros) === 9
}
