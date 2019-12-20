/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map()
  // 每个单词按ascii码排序并存入map中的数组
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')
    if (map.has(str)) {
      map.get(str).push(strs[i])
    } else {
      map.set(str, [strs[i]])
    }
  }
  return [...map.values()]
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))