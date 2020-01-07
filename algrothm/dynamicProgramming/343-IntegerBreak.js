/**
 * @param {number} n
 * @return {number}
 */
// 1: 递归 + 备忘
// var integerBreak = function(n) {
//   const memo = []
//   return cb(n, memo)
// };
// const cb = (n, memo) => {
//   if (memo[n]) {
//     return memo[n]
//   }
//   let ret = -1
//   for (let i = 1; i <= n - 1; i++) {
//     ret = Math.max(ret, i * (n - i), i * cb(n - i, memo))
//   }
//   memo[n] = ret
//   return ret
// }
// 2. dp
var integerBreak = function(n) {
  if (n < 2) {
    return 1
  }
  const dp = [, 1]
  // dp[i]将数组i分割后得到的最大乘积
  for (let i = 2; i <= n; i++) {
    let max = -1
    for (let j = 1; j <= i - 1; j++) {
      // 分割成j, (i - j)
      max = Math.max(max, j * (i - j), j * dp[i - j])
    }
    dp[i] = max
  }
  return dp[n]
};
console.log(integerBreak(2))
console.log(integerBreak(10))