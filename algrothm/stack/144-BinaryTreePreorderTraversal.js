const { test } = require('../tree/test')
// treeToArray(generateBinartTree([1, null, 2, 3, 4]))
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var preorderTraversal = function(root) {
//   const arr = []
//   _helper(root, arr)
//   return arr
// };

// const _helper = (node, arr) => {
//   if (!node) {
//     return
//   }
//   arr.push(node.val)
//   _helper(node.left, arr)
//   _helper(node.right, arr)
// }
// 迭代
var preorderTraversal = function(root) {
  if (!root) {
    return []
  }
  const stack = [root]
  const ret = []
  while (stack.length > 0) {
    const node = stack.pop()
    ret.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return ret
};
test(preorderTraversal, [1, null, 2, 3, 4])