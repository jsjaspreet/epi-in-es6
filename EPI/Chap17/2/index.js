module.exports = function (word1, word2) {
  let numRows = word1.length + 1;
  let numColumns = word2.length + 1;
  let Arr = [];

  // make edit array
  for (let i = 0; i < numRows; i++) {
    let row = new Array(numColumns);
    Arr.push(row);
  }

  // initialize conditions
  for (let i = 0; i < numColumns; i++) {
    Arr[0][i] = i;
  }
  for (let i = 0; i < numRows; i++) {
    Arr[i][0] = i;
  }
  for (let i = 1; i < numRows; i++) {
    for (let j = 1; j < numColumns; j++) {
      let word1Letter = word1[i - 1];
      let word2Letter = word2[j - 1];
      if (word1Letter === word2Letter) {
        Arr[i][j] = Arr[i - 1][j - 1];
      } else {
        Arr[i][j] = Math.min(Arr[i - 1][j], Arr[i - 1][j - 1], Arr[i][j - 1]) + 1;
      }
    }
  }
  return Arr[numRows - 1][numColumns - 1];
};