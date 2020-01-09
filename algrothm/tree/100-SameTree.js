const { generateBinartTree } = require('./test')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true
  } else if (!p || !q) {
    return false
  } else if (p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
const test = (fn, p, q) => {
  const tree1 = generateBinartTree(p)
  const tree2 = generateBinartTree(q)
  const ret = fn(tree1, tree2)
  console.log(ret)
  return ret
}
test(isSameTree, [1, 2, 3], [1, 2, 3])
test(isSameTree, [1, 2], [1, null, 2])
// test2(invertTree, [4, 7, 2, 9, 6, 3, 1])
