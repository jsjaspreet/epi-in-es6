// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function getCharacterFrequency(word) {
  const freqMap = {};
  for (const letter of word) {
    if (!freqMap[letter]) {
      freqMap[letter] = 1;
    } else {
      freqMap[letter] += 1;
    }
  }
  return freqMap;
}

function isUnorderedAnagramPair(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }

  const [w1Freq, w2Freq] = [getCharacterFrequency(w1), getCharacterFrequency(w2)];
  for (const key of Object.keys(w1Freq)) {
    if (!(key in w2Freq)) {
      return false;
    } else if (w2Freq[key] !== w1Freq[key]) {
      return false;
    }
  }
  return true;
}


function* substrings(word) {
  const letters = word.split('');
  const lettersLength = letters.length;
  for (let i = 0; i < lettersLength; i++) {
    for (let j = 1; j <= lettersLength - i; j++) {
      yield word.substr(i, j);
    }
  }

}

module.exports = (word) => {
  const substrs = [...substrings(word)];
  let count = 0;
  for (let i = 1; i <= word.length; i++) {
    const subsStringsOfL = [];
    for (const word of substrs) {
      if (word.length === i) {
        subsStringsOfL.push(word);
      }
    }

    for (let j = 0; j < subsStringsOfL.length; j++) {
      for (let k = j + 1; k < subsStringsOfL.length; k++) {
        if (isUnorderedAnagramPair(subsStringsOfL[j], subsStringsOfL[k])) {
          count++;
        }
      }
    }
  }
  return count;
};