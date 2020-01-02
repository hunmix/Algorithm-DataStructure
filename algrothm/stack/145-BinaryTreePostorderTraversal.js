const { test } = require('../tree/test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var postorderTraversal = function(root) {
//   const arr = []
//   _helper(root, arr)
//   return arr
// };
// const _helper = (node, arr) => {
//   if (!node) {
//     return
//   }
//   _helper(node.left, arr)
//   _helper(node.right, arr)
//   arr.push(node.val)
// }
var postorderTraversal = function(root) {
};
test(postorderTraversal, [1, null, 2, 3])