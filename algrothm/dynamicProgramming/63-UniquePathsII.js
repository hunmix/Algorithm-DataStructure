/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const dp = obstacleGrid
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (dp[i][j] === 1) {
        dp[i][j] = 0
      } else if (i === 0 && j === 0) {
        dp[i][j] = 1
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j]
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  const lastLine = dp[dp.length - 1]
  const len2 = lastLine.length
  return dp[dp.length - 1][len2 - 1]
};
console.log(uniquePathsWithObstacles([
  [0,0,0],
  [1,0,1],
  [0,0,0]
]))
console.log(uniquePathsWithObstacles([
  [1, 0]
]))