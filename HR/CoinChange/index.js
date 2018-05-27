var countChange = function getWays(amount, coins) {
  const ways = new Array(amount+1).fill(0)
  ways[0] = 1;
  for(const coin of coins) {
    for(let i = coin; i <= amount; i++) {
      ways[i] += ways[i-coin]
    }
  }
  return ways[amount]
}