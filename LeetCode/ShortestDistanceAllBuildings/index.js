module.exports = (grid) => {
  let numRows = grid.length, numCol = grid[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCol; j++) {
      if (grid[i][j] === 1) {
        let queue = [[i, j]];
        for (let k = Math.max(0, i - 1); k < Math.min(numRows - 1, i + 1); k++) {
          for (let o = Math.max(0, j - 1); o < Math.min(numCol - 1, j + 1); o++) {
            if (grid[k][o] === 0) {
              queue.push([k, o]);
              grid[k][o]--
            } else if (grid[k][o] === 1) {

            }
          }
        }

      }
    }
  }
};