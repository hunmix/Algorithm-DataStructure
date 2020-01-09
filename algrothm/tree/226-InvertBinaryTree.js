const { test2 } = require('./test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null
  }
  const right = invertTree(root.right)
  const left = invertTree(root.left)
  root.left = right
  root.right = left
  return root
};

test2(invertTree, [4, 2, 7, 1, 3, 6, 9])
// test2(invertTree, [4, 7, 2, 9, 6, 3, 1])
