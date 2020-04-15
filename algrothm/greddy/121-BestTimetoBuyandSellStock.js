/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowest = 0
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[lowest]
    if (profit > max) {
      max = profit
    }
    if (prices[i] < prices[lowest]) {
      lowest = i
    }
  }
  return max
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))