module.exports = {
  stringToInteger: (str) => {
    const isNegative = str[0] === '-';
    if (isNegative) {
      str = str.slice(1);
    }
    let result = 0,
      length = str.length;
    for (let i = 0; i < length; i++) {
      result *= 10;
      result += new Number(str[i]);
    }
    return isNegative ? -result : result;
  }
};