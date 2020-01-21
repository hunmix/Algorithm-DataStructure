const { generateBinartTree, TreeNode } = require('./test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 暴力递归, 答案不对, 自己写的辅助函数无法判断root === p || root === q的情况, 因为是新建的节点
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) {
    return root
  } else if (left) {
    return left
  } else if (right) {
    return right
  }
  return null
};

const test = (fn, arr, ...res) => {
  const nodes = res.map(v => new TreeNode(v))
  console.log(fn(generateBinartTree(arr), ...nodes))
}

test(lowestCommonAncestor, [3,5,1,6,2,0,8,null,null,7,4], 5, 1)
test(lowestCommonAncestor, [3,5,1,6,2,0,8,null,null,7,4], 5, 4)