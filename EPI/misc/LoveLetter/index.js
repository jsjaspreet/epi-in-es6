module.exports = (loveLetter, newspaper) => {
  const letterFreq = new Map();
  for (const letter of loveLetter) {
    if (letterFreq.has(letter)) {
      letterFreq.set(letter, letterFreq.get(letter) + 1);
    } else {
      letterFreq.set(letter, 1);
    }
  }
  for (const letter of newspaper) {
    if (letterFreq.has(letter)) {
      letterFreq.set(letter, letterFreq.get(letter) - 1);
    }
  }
  for (const key of letterFreq.keys()) {
    if (letterFreq.get(key) > 0) {
      return false;
    }
  }
  return true;
};