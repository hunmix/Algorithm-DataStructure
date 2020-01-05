const { test } = require('../tree/test')
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = [0]
  for (let i = 1; i <= n; i++) {
    // 最坏情况都由1组成
    dp[i] = i
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
};
console.log(numSquares(12))
console.log(numSquares(13))