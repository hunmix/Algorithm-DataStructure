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
 * @return {boolean}
 */
// 1: 暴力递归
// var isBalanced = function (root) {
//   if (!root) {
//     return true
//   }
//   if (Math.abs(getDeep(root.left) - getDeep(root.right)) > 1) {
//     return false
//   }
//   return isBalanced(root.left) && isBalanced(root.right)
// };
// const getDeep = root => {
//   if (!root) {
//     return 0
//   }
//   return Math.max(getDeep(root.left), getDeep(root.right)) + 1
// }
// 递归优化
const isBalanced = function (root) {
  return getDeep(root) !== -1
};
const getDeep = root => {
  if (!root) {
    return 0
  }
  const left = getDeep(root.left)
  if (left === -1) {
    return -1
  }
  const right = getDeep(root.right)
  if (right === -1) {
    return -1
  }
  return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1
}
test(isBalanced, [3,9,20,null,null,15,7])
test(isBalanced, [1,2,2,3,3,null,null,4,4])
// test(isBalanced, [1,null,2,null,3])
test(isBalanced, [1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])
// test(isBalanced, [1,2,3])
test(isBalanced, [])