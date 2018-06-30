module.exports = function (lives) {
  const offset = Math.min(...lives.map(l => l[0]));
  const offsetLives = lives.map(life => [life[0] - offset, life[1] - offset]);
  const maxLife = Math.max(...offsetLives.map(life => life[1]));
  const aliveArr = new Array(maxLife + 1).fill(0);
  for (const [birth, death] of offsetLives) {
    for (let i = birth; i < death; i++) {
      aliveArr[i]++;
    }
  }
  let max = aliveArr[0], maxIndex = 0;
  for (let i = 1; i < aliveArr.length; i++) {
    if (aliveArr[i] > max) {
      max = aliveArr[i];
      maxIndex = i;
    }
  }
  return max;
};