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
var isValidBST = function(root, min, max) {
  if (!root) {
    return true
  }
  if (max !== undefined && root.val >= max) return false
  if (min !== undefined && root.val <= min) return false
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};
test(isValidBST, [2,1,3])
test(isValidBST, [5,1,4,null,null,3,6])
test(isValidBST, [0])
test(isValidBST, [1,1])
test(isValidBST, [10,5,15,null,null,6,20])
test(isValidBST, [0,-1])
