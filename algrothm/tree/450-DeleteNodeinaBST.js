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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root.val < key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val > key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (!root.left && !root.right) {
      return null
    } else if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    } else {
      // 找到右子树中的最小值
      let minNode = root.right
      while (root.left) {
        root = root.left
      }
    }
  }
};
test(deleteNode, [5,3,6,2,4,null,7], 3)
