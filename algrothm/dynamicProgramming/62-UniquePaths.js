/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// dp 
// 空间复杂度 O(m * n)
// var uniquePaths = function(m, n) {
//   // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//   const dp = []
//   for (let i = 0; i < n; i++) {
//     dp.push([])
//     for (let j = 0; j < m; j++) {
//       if (i === 0) {
//         dp[i][j] = 1
//       } else if (j === 0) {
//         dp[i][j] = 1
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//       }
//     }
//   }
//   return dp[n - 1][m - 1]
// };
// dp 空间复杂度优化
var uniquePaths = function(m, n) {
  if (n <= 1) {
    return 1
  }
  const dp = [new Array(m).fill(1), [1]]
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[1][j] = dp[0][j] + dp[1][j - 1]
      dp[0][j] = dp[1][j]
    }
  }
  return dp[1][m - 1]
};
// console.log(uniquePaths(3, 2))
// console.log(uniquePaths(7, 3))
console.log(uniquePaths(2, 1))