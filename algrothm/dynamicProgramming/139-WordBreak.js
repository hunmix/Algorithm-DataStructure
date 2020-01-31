/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 递归
// var wordBreak = function(s, wordDict) {
//   const memo = []
//   const map = new Map()
//   for (let i = 0; i < wordDict.length; i++) {
//     map.set(wordDict[i], true)
//   }
//   return dfs(s, map, 0, memo)
// };

// const dfs = (s, map, index, memo) => {
//   if (index === s.length) {
//     return true
//   }

//   if (memo[index] !== undefined) {
//     return memo[index]
//   }
//   for (let i = index + 1; i <= s.length; i++) {
//     if (map.has(s.substring(index, i)) && dfs(s, map, i, memo)) {
//       memo[index] = true
//       return memo[index]
//     }
//   }
//   memo[index] = false
//   return memo[index]
// }
// dp
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  const map = new Map()
  for (let i = 0; i < wordDict.length; i++) {
    map.set(wordDict[i], true)
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && map.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[s.length]
};

console.log(wordBreak('leetcode', ["leet", "code"]))
console.log(wordBreak("applepenapple", ["apple", "pen"]))
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))