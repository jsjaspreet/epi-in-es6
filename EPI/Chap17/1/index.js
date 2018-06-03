module.exports = function scoreCombinations(score) {
  const scoreArray = new Array(score + 1).fill(0);
  scoreArray[0] = 1;
  const possibleScores = [2, 3, 7];
  for (const points of possibleScores) {
    for (let i = points; i <= score; i++) {
      scoreArray[i] += scoreArray[i - points];
    }
  }
  return scoreArray[score];
};