const { test, TreeNode } = require('./test')
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
  if (!root) {
    return null
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
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
      while (minNode.left) {
        minNode = minNode.left
      }
      const successor = new TreeNode(minNode.val)
      successor.left = root.left
      successor.right = _removeMin(root.right)
      return successor
    }
  }
  return root
};
const _removeMin = node => {
  if (node.left === null) {
    return node.right
  }
  node.left = _removeMin(node.left)
  return node
}
test(deleteNode, [5,3,6,2,4,null,7], 3)
