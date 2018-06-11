module.exports = (words) => {
  let result = [];
  let wordLength = words.length;
  let numWords = words[0].length;
  for (let i = 0; i < numWords; i++) {
    let word = '';
    for (let j = 0; j < wordLength; j++) {
      if (words[j].length > i) {
        word += words[j][i];
      }
    }
    result.push(word);
  }

  return result;
};