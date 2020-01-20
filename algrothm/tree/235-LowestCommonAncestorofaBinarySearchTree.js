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
var lowestCommonAncestor = function(root, p, q) {
  if ((p.val <= root.val && q.val >= root.val) || (p.val >= root.val && q.val <= root.val)) {
    return root
  } else if (p.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
};
const test = (fn, data, ...res) => {
  const ret = fn(generateBinartTree(data), ...res.map(v => new TreeNode(v)))
  console.log(ret.val)
  return ret.val
}
test(lowestCommonAncestor, [6,2,8,0,4,7,9,null,null,3,5], 2, 8)
test(lowestCommonAncestor, [6,2,8,0,4,7,9,null,null,3,5], 2, 4)
