module.exports = function anagramPartition(wordList) {
  return wordList.reduce((acc, word) => {
    const key = word.split('').sort().join('');
    if (key in acc) {
      acc[key].push(word);
    } else {
      acc[key] = [word];
    }
    return acc;
  }, {});
};