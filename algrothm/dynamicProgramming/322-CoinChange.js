/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// f(n) = min(f(n-coins[0] + 1), f(n-coins[1] + 1), f(n-coins[2] + 1), ...f(n-coins[len - 1] + 1))
var coinChange = function(coins, amount) {
  const dp = [0]
  for (let i = 1; i <= amount; i++) {
    dp[i] = Number.MAX_VALUE
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
};

console.log(coinChange([1, 2, 5], 11))