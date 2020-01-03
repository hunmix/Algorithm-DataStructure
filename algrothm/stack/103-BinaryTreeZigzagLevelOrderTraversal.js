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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }
  const quene = [root]
  const ret = []
  let count = 1
  while (quene.length > 0) {
    let num = 0
    const arr = []
    const isOdd = ret.length % 2 === 0
    for (let i = 0; i < count; i++) {
      const node = quene.shift()
      isOdd ? arr.push(node.val) : arr.unshift(node.val)
      if (node.left) {
        quene.push(node.left)
        num++
      }
      if (node.right) {
        quene.push(node.right)
        num++
      }
    }
    ret.push(arr)
    count = num
  }
  return ret
};

test(zigzagLevelOrder, [3,9,20,null,null,15,7])
// test(zigzagLevelOrder, [])