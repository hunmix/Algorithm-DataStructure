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
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) {
    return 0
  }
  return _pathSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};
// 以root为起始点的路径中是否有和为sum的路径
const _pathSum = (root, sum) => {
  if (!root) {
    return 0
  }
  let res = 0
  if (sum === root.val) {
    res++
  }
  sum -= root.val
  return _pathSum(root.left, sum) + _pathSum(root.right, sum) + res
}

test(pathSum, [5,4,8,11,null,13,4,7,2,null,null,5,1], 22)