const { test } = require('./test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 1
// var sumNumbers = function(root) {
//   console.log(root)
//   if (!root) {
//     return 0
//   }
//   const ret = []
//   _sumNumbers(root, ret, '')
//   console.log(ret)
//   return ret.reduce((acc, cur) => {
//     return acc + Number(cur)
//   }, 0)
// };
// const _sumNumbers = (root, ret, sum) => {
//   if (!root.left && !root.right) {
//     ret.push(sum + `${root.val}`)
//     return
//   }
//   sum += `${root.val}`
//   if (root.left) {
//     _sumNumbers(root.left, ret, sum)
//   }
//   if (root.right) {
//     _sumNumbers(root.right, ret, sum)
//   }
// }
// 2 优化
var sumNumbers = function(root) {
  let sum = 0
  if (!root) {
    return sum
  }
  function dfs (root, str) {
    if (!root.left && !root.right) {
      sum += Number(str + `${root.val}`)
    }
    str += `${root.val}`
    root.left && dfs(root.left, str)
    root.right && dfs(root.right, str)
  }
  dfs(root, '')
  return sum
};

test(sumNumbers, [1,2,3])
test(sumNumbers, [4,9,0,5,1])