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
 * @return {string[]}
 */
// 1
// var binaryTreePaths = function(root) {
//   if (!root) {
//     return []
//   }
//   const ret = []
//   _binaryTreePaths(root, ret)
//   return ret
// };
// const _binaryTreePaths = (root, arr, path = '') => {
//   if (!root.left && !root.right) {
//     path += root.val
//     arr.push(path)
//     return
//   }
//   path += `${root.val}->`
//   root.left && _binaryTreePaths(root.left, arr, path)
//   root.right && _binaryTreePaths(root.right, arr, path)
// }
// 2
var binaryTreePaths = function(root) {
  const ret = []
  if (!root) {
    return ret
  }
  if (!root.left && !root.right) {
    ret.push(`${root.val}`)
    return ret
  }
  const left = binaryTreePaths(root.left)
  // 连接当前节点数值和左子树所有路径
  for (let i = 0; i < left.length; i++) {
    ret.push(`${root.val}->${left[i]}`)
  }
  const right = binaryTreePaths(root.right)
  for (let i = 0; i < right.length; i++) {
    ret.push(`${root.val}->${right[i]}`)
  }
  return ret
};
test(binaryTreePaths, [1,2,3,null,5])
test(binaryTreePaths, [])