function addLetter(map, letter) {
  if (!(letter in map)) {
    map[letter] = 1;
  } else {
    map[letter]++;
  }
}

function removeLetter(map, letter) {
  if (letter in map) {
    let curr = map[letter];
    if (curr === 1) {
      delete map[letter];
    } else {
      map[letter]--;
    }
  }
}

function getFreqMap(s) {
  let res = {};
  for (const letter of s) {
    if (letter in res) {
      res[letter]++;
    } else {
      res[letter] = 1;
    }
  }
  return res;
}

function satisfied(target, curr) {
  if (Object.keys(target).length !== Object.keys(curr).length) {
    return false;
  }
  for (const key of Object.keys(target)) {
    if (curr[key] < target[key]) {
      return false;
    }
  }
  return true;
}


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
module.exports = function (s, t) {
  const letterSet = new Set(t.split(''));
  const targetFreqMap = getFreqMap(t);
  const freqMap = {};
  let start = 0;
  let minWindow = null;
  let currWindow = '';
  for (let i = 0; i < s.length; i++) {
    let currLetter = s[i];
    if (letterSet.has(currLetter)) {
      addLetter(freqMap, currLetter);
    }
    currWindow += currLetter;
    while (satisfied(targetFreqMap, freqMap)) {
      minWindow = (!minWindow || (minWindow.length > currWindow.length)) ? currWindow : minWindow;
      let startLetter = s[start++];
      removeLetter(freqMap, startLetter);
      currWindow = currWindow.slice(1);
    }
  }
  return minWindow ? minWindow : '';
};
