/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ret = []
  _combine(n, 1, k, ret)
  return ret
};

const _combine = (n, start, k, ret, arr = []) => {
  if (k === arr.length) {
    ret.push([...arr])
    return
  }
  // 剪枝, 确保[i...n]中至少有k-arr.length个元素
  for (let i = start; i <= n - (k - arr.length) + 1; i++) {
    arr.push(i)
    _combine(n, i + 1, k, ret, arr)
    arr.pop()
  }
}

console.log(combine(4, 2))
console.log(combine(4, 3))