function getWordArray(doc) {
  return doc.trim().toLowerCase().split(' ').map(word => word.replace(/\W/g, '')).filter(word => word.length > 0);
}

module.exports = function wordCountEngine(document) {
  const wordArray = getWordArray(document);
  const freqMap = new Map();
  let largestCount = 0;
  for (const word of wordArray) {
    if (freqMap.has(word)) {
      const newFreq = freqMap.get(word) + 1;
      largestCount = Math.max(largestCount, newFreq);
      freqMap.set(word, newFreq);
    } else {
      largestCount = Math.max(largestCount, 1);
      freqMap.set(word, 1);
    }
  }
  const buckets = new Array(largestCount + 1).fill([]);
  const seen = new Set();

  for (const word of wordArray) {
    if (seen.has(word)) {
      continue;
    }
    seen.add(word);
    const bucketNumber = freqMap.get(word);
    buckets[bucketNumber] = [...buckets[bucketNumber], [word, String(bucketNumber)]];
  }

  return buckets.reverse().reduce((acc, next) => [...acc, ...next], []);
};