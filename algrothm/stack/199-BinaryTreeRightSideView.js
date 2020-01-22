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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
    return []
  }
  const queue = [root]
  const levels = []
  let count = 1
  while (queue.length > 0) {
    const arr = []
    let num = 0
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
    levels.push(arr)
    count = num
  }
  const ret = []
  for (let i = 0; i < levels.length; i++) {
    ret.push(levels[i].pop())
  }
  return ret
};
test(rightSideView, [3,9,20,null,null,15,7])
test(rightSideView, [])