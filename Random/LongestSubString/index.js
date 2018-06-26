module.exports = function (word) {
  let window = '';
  let longestSub = '';
  let start = 0;
  const seen = new Set();
  for (const letter of word) {
    while (seen.has(letter)) {
      let startLetter = word[start++];
      seen.delete(startLetter);
      window = window.slice(1);
    }
    seen.add(letter);
    window += letter;
    longestSub = window.length > longestSub.length ? window : longestSub;
  }
  return longestSub;
};