module.exports = function (lives) {
  const minYear = Math.min(...lives.map(life => life[0]));
  const offsetLives = lives.map(life => [life[0] - minYear, life[1] - minYear]);
  const maxYear = Math.max(...offsetLives.map(life => life[1]));
  const liveArr = new Array(maxYear + 1).fill(0);
  for (const [bY, dY] of offsetLives) {
    liveArr[bY]++;
    liveArr[dY]--;
  }
  let max = 0, mostLiveYear = null, curr = 0;
  for (let i = 0; i < liveArr.length; i++) {
    curr += liveArr[i];
    if (curr > max) {
      mostLiveYear = i;
      max = curr;
    }
  }
  return max;
};