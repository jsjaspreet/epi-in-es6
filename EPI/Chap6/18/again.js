/**
 * Compute the spiral ordering of a grid
 * [[1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]] => [1, 2, 3, 6, 9, 8, 7, 4, 5]
 * @param grid
 */
function gridTraverse(grid) {
  if (grid.length === 0) {
    return []
  }
  else if (grid.length === 1) {
    return [grid[0][0]]
  }
  else if (grid.length === 2) {
    return [grid[0][0], grid[0][1], grid[1][1], grid[1][0]]
  } else {
    const numToTraverse = grid.length - 1
    let holder = []
    // top row
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[0][i])
    }
    // right row
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[i][numToTraverse])
    }
    // bottom
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[numToTraverse][numToTraverse - i])
    }
    // left
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[numToTraverse - i][0])
    }
    // chop edges
    let chopped = grid.slice(1, numToTraverse).map((row) => row.slice(1, numToTraverse))
    return [...holder, ...gridTraverse(chopped)]
  }
}

module.exports = function(grid) {
  return gridTraverse(grid)
}
