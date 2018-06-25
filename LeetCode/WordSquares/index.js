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
  if (words.length === 0) {
    return;
  }
  if (rowIdx === grid.length) {
    yield grid;
    return;
  }
  const prefix = grid[rowIdx];
  console.log('prefix', prefix);
  const possibleWords = words.filter(word => {
    return word.startsWith(prefix);
  });

  for (let idx = 0; idx < possibleWords.length; idx++) {
    const word = possibleWords[idx];
    const wordOcc = words.indexOf(word);
    console.log('possible word', word);
    const remainingWords = words.slice(0, wordOcc).concat(words.slice(wordOcc + 1));
    console.log('remainingWords', remainingWords);
    const newGrid = fill(grid, word, rowIdx);
    console.log('newGrid', newGrid);
    console.log();
    console.log();
    console.log();
    yield* squaresHelper(newGrid, remainingWords, rowIdx + 1);
  }
}

module.exports = (words) => {
  const result = [];
  words.forEach((word, idx) => {
    console.log('STARTING WORD', word)
    const remainingWords = words.slice(0, idx).concat(words.slice(idx + 1));
    const potentialSquare = [word];
    for (let i = 1; i < word.length; i++) {
      potentialSquare.push(word[i]);
    }
    console.log('starting square', potentialSquare);
    console.log("remaining words", remainingWords)
    const squares = [...squaresHelper(potentialSquare, remainingWords, 1)];
    console.log('squares found', squares);
    result.push(...squares);
  });
  console.log('result', result);
  return result;
};