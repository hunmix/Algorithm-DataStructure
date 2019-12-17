/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0
  let r = -1
  let max = 0
  let cur = {} // 窗口中已存在的字符
  // s[l...r] 连续子串
  while (l < s.length) {
    if (r + 1 < s.length && !cur[s[r + 1]]) {
      cur[s[++r]] = true
    } else {
      cur[s[l++]] = false
    }
    max = Math.max(max, r - l + 1)
  }
  return max
};

console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("abcabcbb"))