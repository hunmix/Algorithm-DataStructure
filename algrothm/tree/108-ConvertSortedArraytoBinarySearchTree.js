const { TreeNode } = require('./test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 递归
var sortedArrayToBST = function(nums) {
  if (nums.length <= 0) {
    return null
  }
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  return root
};

const test = (fn, ...res) => {
  console.log(fn(...res))
}
test(sortedArrayToBST, [-10,-3,0,5,9])
