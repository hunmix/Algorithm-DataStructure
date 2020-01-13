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
 * @param {number} sum
 * @return {boolean}
 */
// 递归
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false
  }
  sum -= root.val
  if (root.left === null && root.right === null) {
    return sum === 0
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};
// 迭代: 懒癌
test(hasPathSum, [5,4,8,11,null,13,4,7,2,null,null,null,1], 22)
test(hasPathSum, [], 0)
test(hasPathSum, [1,2], 1)