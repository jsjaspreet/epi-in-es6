function surroundingAverage(grid, i, j) {
  const numRows = grid.length;
  const numCol = grid[0].length;
  let numCells = 0;
  let sum = 0;
  for (let a = Math.max(i - 1, 0); a <= Math.min(numRows - 1, i + 1); a++) {
    for (let b = Math.max(j - 1, 0); b <= Math.min(numCol - 1, j + 1); b++) {
      numCells++;
      sum += grid[a][b];
    }
  }

  return Math.floor(sum / numCells);
}

function smoothImage(grid) {
  const numRows = grid.length;
  const numCol = grid[0].length;
  const newImage = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    newImage[i] = new Array(numCol);
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCol; j++) {
      const avg = surroundingAverage(grid, i, j);
      newImage[i][j] = avg;
    }
  }

  return newImage;
}

module.exports = smoothImage;
