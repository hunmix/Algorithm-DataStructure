/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const ret = []
  _partition(s, 0, ret)
  return ret
};

const _partition = (s, index, result, arr = []) => {
  if (index === s.length) {
    result.push(arr)
    return
  }
  for (let i = index + 1; i <= s.length; i++) {
    const temp = s.substring(index, i)
    if (isPalindrome(temp)) {
      _partition(s, i, result, [...arr, temp])
    }
  }
}
const isPalindrome = str => {
  let l = 0
  let r = str.length - 1
  while (l < r) {
    if (str[l] !== str[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

console.log(partition('aab'))