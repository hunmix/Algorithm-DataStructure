/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map()
  // 存储字符出现的数量
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  let arr = []
  // 哈希表 -> 数组
  for (let v of map) {
    const key = v[0]
    arr.push(key)
  }
  // 根据出现频次排序
  arr = arr.sort((a, b) => map.get(b) - map.get(a))
  // 按序拼接字符串
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < map.get(arr[i]); j++) {
      str += arr[i]
    }
  }
  return str
};
console.log(frequencySort('cccaaa'))
console.log(frequencySort('tree'))
console.log(frequencySort('Aabb'))