module.exports = function(prices) {
  if (prices.length < 2) {
    return 0
  }
  let maxProfit = 0
  let minPrice = prices[0]
  const numPrices = prices.length
  for (let i = 1; i < numPrices; i++) {
    const currPrice = prices[i]
    maxProfit = Math.max(maxProfit, currPrice - minPrice)
    minPrice = Math.min(minPrice, currPrice)
  }
  return maxProfit
}