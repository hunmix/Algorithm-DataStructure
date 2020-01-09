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
var minDepth = function(root) {
  if (root === null) {
    return 0
  }
  // 叶子节点时返回1, 及自己是叶子节点, 深度1
  if (!root.left && !root.right) {
    return 1
  }
  // 左节点不存在时返回右节点
  if (!root.left) {
    return minDepth(root.right) + 1
  }
  // 右节点不存在时返回左节点
  if (!root.right) {
    return minDepth(root.left) + 1
  }
  // 左右节点都存在时返回较小的值
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

test(minDepth, [3,9,20,null,null,15,7])
test(minDepth, [1,2])
// test(minDepth, [])