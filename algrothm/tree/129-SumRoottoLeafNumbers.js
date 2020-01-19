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
var sumNumbers = function(root) {
  const ret = []
  _sumNumbers(root, ret)
  return ret.reduce((acc, cur) => {
    return acc + cur
  }, 0)
};
const _sumNumbers = (root, sum) => {
  if (!root) {
    return 0
  }
  
}

test(sumNumbers, [1,2,3])
test(sumNumbers, [4,9,0,5,1])