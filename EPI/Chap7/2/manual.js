const BaseToInt = require('./BaseToInt');
const IntToBase = require('./IntToBase');

module.exports = (str, b1, b2) => {
  const num = BaseToInt(str, b1);
  return IntToBase(num, b2);
};
