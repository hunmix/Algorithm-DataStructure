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
// var countNodes = function(root) {
//   if (root === null) {
//     return 0
//   }
//   return countNodes(root.left) + countNodes(root.right) + 1
// };
// 完全二叉树
var countNodes = function(root) {
  if (!root) {
    return 0
  }
  const leftDeep = getDeep(root.left)
  const rightDeep = getDeep(root.right)
  // 左子树是满二叉树, 二叉树节点共有deep ^ 2 - 1
  if (leftDeep === rightDeep) {
    return 2 ** leftDeep - 1 + count(root.right) + 1
  // 右子树是满二叉树
  } else {
    return 2 ** rightDeep - 1 + count(root.left) + 1
  }
};
const count = root => {
  if (root === null) {
    return 0
  }
  return count(root.left) + count(root.right) + 1
}
const getDeep = root => {
  if (root === null) {
    return 0
  }
  return getDeep(root.left) + 1
}
test(countNodes, [1,2,3,4,5,6])
test(countNodes, [1,2])
test(countNodes, [1,2,3])
test(countNodes, [])