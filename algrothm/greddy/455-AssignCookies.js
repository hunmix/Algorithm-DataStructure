/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 先满足需求大的孩子
// var findContentChildren = function(g, s) {
//   g = g.sort((a, b) => a - b)
//   s = s.sort((a, b) => a - b)
//   let g = 0
//   while (s.length > 0) {
//     const cookie = s.pop()
//     while (g.length > 0) {
//       if (cookie >= g.pop()) {
//         sum++
//         break
//       }
//     }
//   }
//   return sum
// };

// 先满足需求小的孩子
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let i = 0
  let j = 0
  while (i < s.length && j < g.length) {
    if (s[i] >= g[j]) {
      j++
    }
    i++
  }
  return j
};

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1,2], [1,2,3]))
console.log(findContentChildren([1,2,3], [3]))
console.log(findContentChildren([10,9,8,7], [5,6,7,8]))