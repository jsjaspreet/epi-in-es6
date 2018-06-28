function getNumLiveNeighbors(grid, i, j) {
  let numRows = grid.length;
  let numCol = grid[0].length;
  let numLive = 0;

  for (let a = Math.max(i - 1, 0); a <= Math.min(numRows - 1, i + 1); a++) {
    for (let b = Math.max(j - 1, 0); b <= Math.min(numCol - 1, j + 1); b++) {
      const cellAlive = (grid[a][b] & 1) === 1;
      if (cellAlive) {
        numLive++;
      }
    }
  }
  return numLive - (grid[i][j] & 1);
};

function getNextLife(currHealth, numLiveNeighbors) {
  if (currHealth === 0) {
    return numLiveNeighbors === 3 ? 1 : 0;
  } else {
    if (numLiveNeighbors < 2 || numLiveNeighbors > 3) {
      return 0;
    } else {
      return 1;
    }
  }
}

module.exports = function gameOfLife(grid) {
  let numRows = grid.length;
  let numCol = grid[0].length;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCol; j++) {
      const numLiveNeighbors = getNumLiveNeighbors(grid, i, j);
      const nextLife = getNextLife(grid[i][j] & 1, numLiveNeighbors);
      if (nextLife === 1) {
        grid[i][j] |= 2;
      }

    }
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCol; j++) {
      grid[i][j] >>>= 1;
    }
  }

  return grid;
};