/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const arr = str.split(' ')
  if (arr.length !== pattern.length) {
    return false
  }
  const map = {} // str字典
  const map2 = {} // ab字典
  // arr[0...j) 已比较过的
  for (let i = 0; i < arr.length; i++) {
    // 两个字典中都不存在值则存新值, 否则比较两个字典中是否对应
    if (!map[arr[i]] && !map2[pattern[i]]) {
      map[arr[i]] = pattern[i]
      map2[pattern[i]] = arr[i]
    } else if (map[arr[i]] !== pattern[i] || map2[pattern[i]] !== arr[i]) {
      return false
    }
  }
  return true
};

console.log(wordPattern('jquery', 'jquery'))
console.log(wordPattern('aaaa', 'dog dog dog dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('abba', 'dog cat cat dog'))