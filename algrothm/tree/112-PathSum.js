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
// 暴力
var hasPathSum = function(root, sum) {
  
};
test(hasPathSum, [5,4,8,11,null,13,4,7,2,null,null,null,1])
test(hasPathSum, [])