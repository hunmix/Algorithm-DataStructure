const { test } = require('../tree/test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }
  const queue = [root]
  const ret = []
  let count = 1
  while (queue.length > 0) {
    let num = 0
    const arr = []
    for (let i = 0; i < count; i++) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left) {
        queue.push(node.left)
        num++
      }
      if (node.right) {
        queue.push(node.right)
        num++
      }
    }
    ret.unshift(arr)
    count = num
  }
  return ret
};

test(levelOrderBottom, [3,9,20,null,null,15,7])
test(levelOrderBottom, [])