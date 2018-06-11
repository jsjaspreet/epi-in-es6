module.exports = function intToBase(num, base) {
  const result = [];
  let curr = num;
  while (curr) {
    let nextDigit = curr % base;
    result.unshift((nextDigit).toString(base).toUpperCase());
    curr = Math.floor(curr / base);
  }
  return result.join('');
};