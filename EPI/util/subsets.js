function* getKLengthSubsets(letters, prefix, k) {
  if (k === 0) {
    yield prefix;
    return;
  }

  for (const char of letters) {
    const newPrefix = prefix + char;
    yield *getKLengthSubsets(letters, newPrefix, k - 1);
  }
}

module.exports = (str, k) => {
  const letters = str.split('');
  const subsets = getKLengthSubsets(letters, '', k);
  for(const subset of subsets) {
    console.log(subset)
  }

};