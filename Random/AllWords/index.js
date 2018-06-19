module.exports = (s, dict) => {
  let result = new Set();
  for (let i = 0; i < s.length; i++) {
    for (const word of dict) {
      if (s.startsWith(word, i)) {
        result.add(word);
      }
    }
  }
  return Array.from(result);
};