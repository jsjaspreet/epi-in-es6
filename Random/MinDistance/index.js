module.exports = (grid, i, j) => {
  let queue = [[i, j, 0]];
  let minDistance = 0, numRows = grid.length, numCol = grid[0].length;
  let visited = [];
  for (let i = 0; i < numRows; i++) {
    visited.push(new Array(numCol).fill(false));
  }

  while (queue.length !== 0) {
    let [rowIdx, colIdx, dist] = queue.shift();
    if (rowIdx < 0 || rowIdx >= numRows || colIdx < 0 || colIdx >= numCol) {
      continue;
    }
    if (visited[rowIdx][colIdx]) {
      continue;
    }
    visited[rowIdx][colIdx] = true;
    if (grid[rowIdx][colIdx] === 1) {
      minDistance += dist;
    }
    queue.push([rowIdx - 1, colIdx, dist + 1]);
    queue.push([rowIdx + 1, colIdx, dist + 1]);
    queue.push([rowIdx, colIdx - 1, dist + 1]);
    queue.push([rowIdx, colIdx + 1, dist + 1]);
  }

  return minDistance;
};