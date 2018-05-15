const numToChar = [
  '0',
  '1',
  'ABC',
  'DEF',
  'GHI',
  'JKL',
  'MNO',
  'PQRS',
  'TUV',
  'WXYZ'
];


function* getPossibilities(digits, prefix) {
  if (digits.length === 0) {
    yield prefix;
    return;
  }
  for (const digit of digits) {
    const possibilities = numToChar[digit];
    for (const possibility of possibilities) {
      yield* getPossibilities(digits.slice(1), prefix + possibility);
    }
  }
}


module.exports = (number) => {
  const digits = String(number).split('').map(digit => parseInt(digit, 10));
  const possibilities = getPossibilities(digits, '');
  const filtered = new Set();
  for (const possibility of possibilities) {
    filtered.add(possibility);
  }
  return Array.from(filtered);
};