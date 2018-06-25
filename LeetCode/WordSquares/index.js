function fill(grid, word, rowIdx) {
  const newGrid = [...grid];
  newGrid[rowIdx] = word;
  for (let i = rowIdx + 1; i < word.length; i++) {
    let currWord = newGrid[i];
    let letter = word[i];
    newGrid[i] = currWord + letter;
  }
  return newGrid;
}

function* squaresHelper(grid, words, rowIdx) {
  if (rowIdx === grid.length) {
    yield grid;
    return;
  }
  const prefix = grid[rowIdx];
  const possibleWords = words.filter(word => {
    return word.startsWith(prefix);
  });

  for (let idx = 0; idx < possibleWords.length; idx++) {
    const word = possibleWords[idx];
    const newGrid = fill(grid, word, rowIdx);
    yield* squaresHelper(newGrid, words, rowIdx + 1);
  }
}

module.exports = (words) => {
  const result = [];
  words.forEach((word, idx) => {
    const potentialSquare = [word];
    for (let i = 1; i < word.length; i++) {
      potentialSquare.push(word[i]);
    }
    const squares = [...squaresHelper(potentialSquare, words, 1)];
    result.push(...squares);
  });
  return result;
};