function numIslands(grid) {
  let visited = getBool2D(grid);
  let numIslands = 0, numRows = grid.length, numCol = grid[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCol; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        numIslands++;
        markVisited({ visited, grid, i, j });
      }
      visited[i][j] = true;
    }
  }
  return numIslands;
}

function getBool2D(grid) {
  let res = [];
  for (let i = 0; i < grid.length; i++) {
    res.push(new Array(grid[0].length).fill(false));
  }
  return res;
}

function markVisited({ grid, i, j, visited }) {
  if (i < 0 || j < 0 || j === grid[0].length || i === grid.length || visited[i][j] || grid[i][j] === 0) {
    return;
  }

  visited[i][j] = true;
  markVisited({ grid, i: i + 1, j, visited });
  markVisited({ grid, i: i - 1, j, visited });
  markVisited({ grid, i, j: j + 1, visited });
  markVisited({ grid, i, j: j - 1, visited });
}

module.exports = numIslands;