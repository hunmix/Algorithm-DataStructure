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
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  // 节点队列
  const queue = [root]
  const ret = []
  // 计算一层节点个数
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
    ret.push(arr)
    count = num
  }
  return ret
};

test(levelOrder, [3,9,20,null,null,15,7])
test(levelOrder, [])