/**
 * @param {string} s
 * @return {number}
 */
// 1: 递归 + 备忘
// var numDecodings = function(s) {
//   const memo = []
//   return _numDecodings(s, 0, memo)
// };
// const _numDecodings = (s, start, memo) => {
//   if (memo[start]) {
//     return memo[start]
//   }
//   if (s.length === start) {
//     return 1
//   }
//   if (s[start] === '0') {
//     return 0
//   }
//   let total = 0
//   total += _numDecodings(s, start + 1, memo)
//   if (start < s.length - 1 && Number(s.slice(start, start + 2)) <= 26 && s[start] !== '0') {
//     total += _numDecodings(s, start + 2, memo)
//   }
//   memo[start] = total
//   return total
// }
// 2: dp
// 空间复杂度O(n)
// var numDecodings = function(s) {
//   const dp = []
//   dp[s.length] = 1
//   if (s[s.length - 1] === '0') {
//     dp[s.length - 1] = 0
//   } else {
//     dp[s.length - 1] = 1
//   }
//   // s[i...s.length)
//   for (let i = s.length - 2; i >= 0; i--) {
//     // 如果s[i]是0, 则切割不成立
//     if (s[i] === '0') {
//       dp[i] = 0
//       continue
//     }
//     if (Number(s.slice(i, i + 2)) <= 26) {
//       dp[i] = dp[i + 1] + dp[i + 2]
//     } else {
//       dp[i] = dp[i + 1]
//     }
//   }
//   return dp[0]
// };
// 3: dp 空间复杂度优化
// 空间复杂度O(1)
var numDecodings = function(s) {
  let pre = 1
  let cur
  if (s[s.length - 1] === '0') {
    cur = 0
  } else {
    cur = 1
  }
  for (let i = s.length - 2; i >= 0; i--) {
    // 如果s[i]是0, 则切割不成立
    if (s[i] === '0') {
      pre = cur
      cur = 0
      continue
    }
    if (Number(s.slice(i, i + 2)) <= 26) {
      const val = cur + pre
      pre = cur
      cur = val
    } else {
      pre = cur
    }
  }
  return cur
};
console.log(numDecodings('226'))
console.log(numDecodings('2026'))
console.log(numDecodings('10'))
console.log(numDecodings('27'))
console.log(numDecodings('230'))