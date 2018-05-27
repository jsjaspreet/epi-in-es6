function* forwardSubstrings(remaining, curr, targetLength) {
  if (!remaining) {
    return;
  }
  for (let i = 0; i < remaining.length; i++) {
    let next = curr + remaining[i];
    if (next.length === targetLength) yield next;
    yield* forwardSubstrings(remaining.slice(i + 1), next, targetLength);
  }

}

module.exports = (string) => {
  const uniqueLetters = [...(new Set(string))];
  const words = [...forwardSubstrings(string, '', uniqueLetters.length)].sort();
  for (const word of words) {
    const wordSet = new Set(word);
    if (wordSet.size === uniqueLetters.length) {
      return word;
    }
  }
};