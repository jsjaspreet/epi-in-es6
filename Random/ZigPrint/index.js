function zig(grid) {
  let directions = { up: 1, down: 0 };
  let currDirection = directions.down;
  let flipDirection = () => {
    currDirection = currDirection ^ 1;
  };

  let numCol = grid[0].length;
  let numRow = grid.length;
  let str = '';
  let i = 0;
  for (let j = 0; j < numCol; j++) {
    if (currDirection === directions.down) {
      str += grid[i][j];
      if (i === numRow - 1) {
        flipDirection();
        i -= 1;
      } else {
        i += 1;
      }
    } else {
      str += grid[i][j];
      if (i === 0) {
        flipDirection();
        i += 1;
      } else {
        i -= 1;
      }
    }
  }
  return str;
}

module.exports = zig;