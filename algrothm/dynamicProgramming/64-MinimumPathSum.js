/**
 * @param {number[][]} grid
 * @return {number}
 */
// 直接在原数组上进行操作
var minPathSum = function(grid) {
  if (!grid ||grid.length <= 0) {
    return 0
  }
  const dp = grid
  // 先计算第一行
  for (let i = 0; i < dp[0].length; i++) {
    // dp[0].push((dp[0][i - 1] || 0) + grid[0][i])
    dp[0][i] = (dp[0][i - 1] || 0) + dp[0][i]
  }
  // 从第二行开始算
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j]
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + dp[i][j]
      }
    }
  }
  const len = dp.length
  const last = dp[len - 1]
  return last[last.length - 1]
}
console.log(minPathSum(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
))