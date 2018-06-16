function* genRows(numRows) {
  let row = [1];
  yield row;
  for (let i = 1; i < numRows; i++) {
    let nextRow = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      const leftSum = j - 1 < 0 ? 0 : row[j - 1];
      const rightSum = j >= row.length ? 0 : row[j];
      nextRow[j] = leftSum + rightSum;
    }
    row = nextRow;
    yield row;

  }
}

module.exports = function generate(numRows) {
  if (numRows <= 0) {
    return [];
  }
  return [...genRows(numRows)];
};

