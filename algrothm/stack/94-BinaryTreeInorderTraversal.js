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
// 递归
// var inorderTraversal = function(root) {
//   const arr = []
//   _helper(root, arr)
//   return arr
// }

// const _helper = (node, arr) => {
//   if (!node) {
//     return
//   }
//   _helper(node.left, arr)
//   arr.push(node.val)
//   _helper(node.right, arr)
// }

// 迭代
var inorderTraversal = function(root) {
  if (!root) {
    return []
  }
  const stack = []
  const ret = []
  let cur = root
  while (cur || stack.length > 0) {
    // 将最左边的值依次推入栈中
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    const node = stack.pop()
    ret.push(node.val)
    // 遍历右子树
    cur = node.right
  }
  return ret
}

test(inorderTraversal, [1, null, 2, 3])
// test(inorderTraversal, [1, 2, 3, 4, 5])