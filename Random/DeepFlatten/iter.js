module.exports = (arr) => {
  let result = [];
  let stack = [...arr];
  while (stack.length !== 0) {
    let next = stack.shift();
    if (Array.isArray(next)) {
      for(let i = next.length-1; i >= 0; i--) {
        stack.unshift(next[i])
      }
    } else {
      result.push(next);
    }
  }
  return result;
};