// buy sell stock once optimally
module.exports = function(prices) {
  let maxProfit = 0
  let minPrice = Number.MAX_VALUE
  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    minPrice = Math.min(minPrice, prices[i])
  }
  return maxProfit
}