function search(board, currLen, i, j, word) {
  if(currLen === word.length) {
    return true
  } else if (i < 0 || j < 0 || i === board.length || j === board[0].length) {
    return false
  } else if (board[i][j] !== word[currLen]) {
    return false
  }
  let tmp = board[i][j]
  board[i][j] = 'VISITED'
  const exists = search(board, currLen+1, i-1, j, word) ||
    search(board, currLen+1, i+1, j, word) ||
    search(board, currLen+1, i, j-1, word) ||
    search(board, currLen+1, i, j+1, word)
  board[i][j] = tmp
  return exists
}


module.exports = function(board, word) {
  let numRows = board.length;
  let numCol = board[0].length;
  for(let i = 0; i < numRows; i++) {
    for(let j = 0; j < numCol; j++) {
      if(search(board, 0, i, j, word)) {
        return true
      }
    }
  }
  return false
};