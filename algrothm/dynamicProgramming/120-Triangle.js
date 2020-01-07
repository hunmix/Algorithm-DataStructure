/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 1
// var minimumTotal = function(triangle) {
//   if (triangle.length <= 0) {
//     return 0
//   }
//   const dp = [[triangle[0][0]]]
//   for (let i = 1; i < triangle.length; i++) {
//     dp.push([])
//     // 获取上一层两个数中最小的值
//     for (let j = 0; j < triangle[i].length; j++) {
//       if (j === 0) {
//         dp[i][j] = dp[i - 1][j] + triangle[i][j]
//       } else if (j === triangle[i].length - 1) {
//         dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
//       } else {
//         dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
//       }
//     }
//   }
//   let min = Number.MAX_SAFE_INTEGER
//   const lastLine = dp[dp.length - 1]
//   // 从最后一排中获取最小的值
//   for (let i = 0; i < lastLine.length; i++) {
//     if (lastLine[i] < min) {
//       min = lastLine[i]
//     }
//   }
//   return min
// };
// 2: 自底向上
// var minimumTotal = function(triangle) {
//   const dp = triangle
//   // 从倒数第二排开始
//   for (let i = dp.length - 2; i >= 0; i--) {
//     for (let j = 0; j < dp[i].length; j++) {
//       dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j]
//     }
//   }
//   return dp[0][0]
// };
// 3: 只用一维数组
var minimumTotal = function(triangle) {
  const dp = [...triangle[triangle.length - 1]]
  // 从倒数第二排开始
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
};
console.log(minimumTotal(
  [
       [2],
      [3,4],
     [6,5,7],
    [4,1,8,3]
  ]
))
console.log(minimumTotal(
  [
       [1],
      [-5,-2],
     [3,6,1],
    [-1,2,4,-3]
  ]
))