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
var isSymmetric = function(root) {
  return isMirror(root, root)
};
const isMirror = (node1, node2) => {
  if (!node1 && !node2) {
    return true
  } else if (!node1 || !node2) {
    return false
  } else if (node1.val !== node2.val) {
    return false
  }
  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
}
test(isSymmetric, [1,2,2,3,4,4,3])
test(isSymmetric, [1,2,2,null,3,null,3])
test(isSymmetric, [1,2,2,3,4,4,3])
// test(minDepth, [])