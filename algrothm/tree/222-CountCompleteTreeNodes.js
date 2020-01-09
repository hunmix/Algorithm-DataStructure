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
// 二叉树通用解法
var countNodes = function(root) {
  if (root === null) {
    return 0
  }
  return countNodes(root.left) + countNodes(root.right) + 1
};
test(countNodes, [1,2,3,4,5,6])
test(countNodes, [1,2])
// test(minDepth, [])