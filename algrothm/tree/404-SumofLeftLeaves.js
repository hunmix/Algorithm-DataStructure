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
var sumOfLeftLeaves = function(root) {
  if (root === null) {
    return 0
  }
  if (root.left && root.left.left === null && root.left.right === null) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};
test(sumOfLeftLeaves, [3,9,20,null,null,15,7])