module.exports = function (arr, num) {
  let [less, same, greater] = [[], [], []];
  const isLess = x => x < num;
  const isSame = x => x === num;
  for (const num of arr) {
    if (isLess(num)) less.push(num);
    else if (isSame(num)) same.push(num);
    else greater.push(num);
  }
  return [...less, ...same, ...greater];
};