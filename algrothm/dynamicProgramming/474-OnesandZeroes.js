/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// m, n组成二维背包, strs为要放入的物品
var findMaxForm = function(strs, m, n) {
  const dp = []
  for (let i = 0; i <= m; i++) {
    dp.push([])
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0
    }
  }
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    let zero = 0
    let one = 0
    for (let n = 0; n < str.length; n++) {
      str[n] === '1' ? one++ : zero++
    }
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j- zero][k - one] + 1)
      }
    }
  }
  return dp[m][n]
};

console.log(findMaxForm(["10", "0", "1"], 1, 1))
console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3))