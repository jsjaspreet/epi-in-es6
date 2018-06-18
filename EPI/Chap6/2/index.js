module.exports = function (numArray) {
  let notAllNines = false;
  const newArray = [...numArray];
  for (let i = numArray.length - 1; i >= 0; i--) {
    if (numArray[i] !== 9) {
      newArray[i] = newArray[i] + 1;
      notAllNines = true;
      break;
    } else {
      newArray[i] = 0;
    }
  }
  return notAllNines ? newArray : [1, ...newArray];
};