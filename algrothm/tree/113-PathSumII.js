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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const ret = []
  _pathSum(root, ret, sum)
  return ret
};
const _pathSum = (root, ret, sum, path = []) => {
  if (!root) return
  path.push(`${root.val}`)
  sum -= root.val
  if (!root.left && !root.right && sum === 0) {
    ret.push(path)
  } else {
    _pathSum(root.left, ret, sum, path = [])
    _pathSum(root.right, ret, sum, path = [])
  }
  path.pop()
}

test(pathSum, [5,4,8,11,null,13,4,7,2,null,null,5,1])