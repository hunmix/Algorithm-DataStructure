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
 * @param {number} k
 * @return {number}
 */
// 暴力中序遍历
// var kthSmallest = function(root, k) {
//   const arr = []
//   _kthSmallest(root, arr)
//   return arr[k - 1]
// };
// const _kthSmallest = (root, arr) => {
//   if (!root) {
//     return
//   }
//   k = _kthSmallest(root.left, arr)
//   console.log(root.val)
//   root.val !== null && arr.push(root.val)
//   k = _kthSmallest(root.right, arr)
// }

// 迭代
var kthSmallest = function(root, k) {
  const stack = []
  while(true) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    k -= 1
    if (k === 0) {
      return root.val
    }
    root = root.right
  }
};

test(kthSmallest, [3,1,4,null,2], 1)
test(kthSmallest, [5,3,6,2,4,null,null,1], 3)
test(kthSmallest, [6, 4, null, 3, 5, 2], 5)
test(kthSmallest, [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23], 25)
