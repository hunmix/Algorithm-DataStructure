/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// FIXME: 对象的兼容处理真蛋疼
var findAnagrams = function(s, p) {
  let l = 0
  let r = -1
  const res = []
  const hash1 = {} // p的字典
  let hash2 = {} // 记录窗口中元素值
  for (let i = 0; i < p.length; i++) { // 初始化p的字典
    if (hash1[p[i]] === undefined) {
      hash1[p[i]] = 0
    }
    hash1[p[i]]++
  }
  // arr[l...r] 滑动窗口 len = p.length
  while (r < s.length) {
    // 小于窗口时移动右边界
    r++
    hash2[s[r]] === undefined ? hash2[s[r]] = 1 : hash2[s[r]]++
    // 大于窗口时移动左边界即整个窗口向右移动一格
    if (r - l + 1 > p.length) {
      if (hash2[s[l]] === undefined) {
        hash2[s[l]] = 0
      }
      hash2[s[l]] !== 0 && hash2[s[l++]]--
    }
    // 窗口长度相等时判断元素是否与p中得相同
    if (r - l + 1 === p.length) {
      // 遍历字典
      if (Object.keys(hash1).every(v => hash1[v] === hash2[v])) {
        res.push(l)
      }
    }
  }
  return res
};
console.log(findAnagrams('abab', 'ab'))
console.log(findAnagrams('cbaebabacd', 'abc'))
