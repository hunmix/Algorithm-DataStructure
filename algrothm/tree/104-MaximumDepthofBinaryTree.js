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
var maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

test(maxDepth, [3,9,20,null,null,15,7])
test(maxDepth, [3])
test(maxDepth, [])