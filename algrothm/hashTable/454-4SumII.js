/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
// O(n²)
var fourSumCount = function(A, B, C, D) {
  let ret = 0
  const map = new Map()
  // C + D 的所有可能结果
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const total = C[i] + D[j]
      if (!map.has(total)) {
        map.set(total, 1)
      } else {
        map.set(total, map.get(total) + 1)
      }
    }
  }
  // 获取 A + B的所有组合并查找map
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const total = A[i] + B[j]
      if (map.has(-total)) {
        ret += map.get(-total)
      }
    }
  }
  console.log(map)
  return ret
};

console.log(fourSumCount(
  [-1,-1],
  [-1,1],
  [-1,1],
  [1,-1]
))
// console.log(fourSumCount(
//   [1,2],
//   [-2,-1],
//   [-1,2],
//   [0,2]
// ))