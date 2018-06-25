function search(board, currLen, i, j, visitedSet, word) {
  if (currLen === word.length) {
    return true;
  } else if (i < 0 || j < 0 || i === board.length || j === board[0].length) {
    return false;
  } else if (board[i][j] !== word[currLen]) {
    return false;
  }

  const loc = `${i}:${j}`;
  if (visitedSet.has(loc)) {
    return false;
  }

  let newVisited = new Set(visitedSet);
  newVisited.add(loc);
  const exists = search(board, currLen + 1, i - 1, j, newVisited, word) ||
    search(board, currLen + 1, i + 1, j, newVisited, word) ||
    search(board, currLen + 1, i, j - 1, newVisited, word) ||
    search(board, currLen + 1, i, j + 1, newVisited, word);
  return exists;
}


module.exports = function (board, word) {
  let numRows = board.length;
  let numCol = board[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCol; j++) {
      let visited = new Set();
      if (search(board, 0, i, j, visited, word)) {
        return true;
      }
    }
  }
  return false;
};