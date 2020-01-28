/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k === 0 || n === 0) {
    return []
  }
  const ret = []
  _combinationSum3(k, n, ret, 1)
  return ret
};

const _combinationSum3 = (k, n, ret, index, count = 0, sum = 0, arr = [], used = []) => {
  if (count === k && sum === n) {
    ret.push([...arr])
    return
  }
  if (count >= k) {
    return
  }
  // 组成的数组为1 - 9
  const num = n < 10 ? n : 10
  for (let i = index; i < num ; i++) {
    if (sum + i > n || used[i]) {
      continue
    }
    arr.push(i)
    used[i] = true
    _combinationSum3(k, n, ret, i + 1, count + 1, sum + i, arr, used)
    arr.pop()
    used[i] = false
  }
}

console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
console.log(combinationSum3(2, 18))