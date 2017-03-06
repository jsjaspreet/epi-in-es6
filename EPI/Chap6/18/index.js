/**
 * Compute the spiral ordering of a grid
 * [[1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]] => [1, 2, 3, 6, 9, 8, 7, 4, 5]
 * @param grid
 */
function gridTraverse(grid) {
  if (grid.length === 1) {
    return [grid[0][0]]
  } else if (grid.length === 2) {
    return [grid[0][0], grid[0][1], grid[1][1], grid[1][0]]
  } else {
    const numToTraverse = grid.length - 1
    let holder = []
    // top
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[0][i])
    }
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[i][grid.length - 1])
    }
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[grid.length - 1][grid.length - 1 - i])
    }
    for (let i = 0; i < numToTraverse; i++) {
      holder.push(grid[grid.length - 1 - i][0])
    }

    let newGrid = grid.slice(1, grid.length - 1)
    newGrid = newGrid.map(row => row.slice(1, row.length - 1))
    return [...holder, ...gridTraverse(newGrid)]
  }
}
module.exports = function(grid) {
  return gridTraverse(grid)
}