module.exports = (s, dict) => {
  const bold = new Array(s.length).fill(false);
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    for (const word of dict) {
      if (s.startsWith(word, i)) {
        end = Math.max(end, i + word.length);
      }
    }
    bold[i] = end > i;
  }

  let result = '';
  let i = 0;
  while (i < s.length) {
    if (!bold[i]) {
      result += s.charAt(i++);
    } else {
      let j = i;
      while (j < s.length && bold[j]) {
        j++;
      }
      result += `<b>${s.substring(i, j)}</b>`;
      i = j;
    }
  }
  return result;
};