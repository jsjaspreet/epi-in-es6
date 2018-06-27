function getBoolean2D(i, j) {
  let res = [];
  for (let a = 0; a < i; a++) {
    res.push(new Array(j).fill(false));
  }
  return res;
}

function matchRegex(text, pattern) {
  const dp = getBoolean2D(text.length + 1, pattern.length + 1);
  dp[0][0] = true;
  for (let i = 1; i < dp[0].length; i++) {
    if (pattern[i - 1] === '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }


  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (pattern[j - 1] === '.' || pattern[j - 1] === text[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pattern[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (pattern[j - 2] === '.' || pattern[j - 2] === text[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[text.length][pattern.length];

}