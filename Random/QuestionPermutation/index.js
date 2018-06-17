function* helper(remaining, prefix) {
  if (remaining.length === 0) {
    yield prefix;
    return;
  }
  let nextQuestionIndex = remaining.indexOf('?');
  if (nextQuestionIndex < 0) {
    yield prefix + remaining;
  } else {
    let newPrefix = prefix + remaining.substring(0, nextQuestionIndex);
    yield* helper(remaining.substring(nextQuestionIndex + 1), newPrefix + '0');
    yield* helper(remaining.substring(nextQuestionIndex + 1), newPrefix + '1');
  }
};


module.exports = (str) => {
  return [...helper(str, '')];
};