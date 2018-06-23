module.exports = function (matrix) {
  const result = [];

  function spiral(grid) {
    if (grid.length === 0) {
      return result;
    }
    const numRows = grid.length;
    const numColumns = grid[0].length;
    if (grid.length === 1) {
      result.push(...grid[0]);
    } else if (grid.length === 2) {
      result.push(...grid[0], ...grid[1].reverse());
    } else if (grid[0].length === 1) {
      const vertical = grid.map(singleNumArray => singleNumArray[0]);
      result.push(...vertical);
    } else if (grid[0].length === 2) {
      const firstCol = grid.map(singleNumArray => singleNumArray[0]);
      const secondCol = grid.map(singleNumArray => singleNumArray[1]);
      let res = [firstCol[0], ...secondCol, ...firstCol.reverse().slice(0, numRows - 1)];
      result.push(...res);
    } else {
      // top
      const top = grid[0].slice(0, numColumns - 1);

      // right
      const right = grid.map(row => row[numColumns - 1]).slice(0, numRows - 1);

      // bottom
      const bottom = grid[numRows - 1].slice().reverse().slice(0, numColumns - 1);

      // left
      const left = grid.map(row => row[0]).slice().reverse().slice(0, numRows - 1);

      result.push(...top, ...right, ...bottom, ...left);
      let shavedGrid = grid.slice(1, numRows - 1).map(row => row.slice(1, numColumns - 1));
      spiral(shavedGrid);
    }
  }

  spiral(matrix);
  return result;
};