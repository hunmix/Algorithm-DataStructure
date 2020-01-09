// 二叉树, 做二叉树类问题时测试用, 先随便写一下
class TreeNode {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}
/**
 * 使用数组生成二叉树, 数组存储方式为层序遍历, 空节点储存格式为null
 * @param {Array} arr 
 */
const generateBinartTree = (arr) => {
  if (arr.length <= 0) {
    return null
  }
  const quene = [new TreeNode(arr.shift())]
  const root = quene[0]
  while (quene.length > 0 && arr.length > 0) {
    const cur = quene.shift()
    const v1 = arr.shift()
    const node1 = v1 ? new TreeNode(v1) : null
    cur.left = node1
    if (v1) {
      quene.push(cur.left)
    }
    const v2 = arr.shift()
    const node2 = v2 ? new TreeNode(v2) : null
    cur.right = node2
    if (v2) {
      quene.push(cur.right)
    }
  }
  return root
}
/**
 * 树转数组, 层数遍历
 * @param {Object} root 
 */
const treeToArray = (root) => {
  const quene = [root]
  const arr =[]
  while (quene.length > 0) {
    const node = quene.shift()
    const val = node ? node.val : node
    arr.push(val)
    if (node) {
      quene.push(node.left)
      quene.push(node.right)
    }
  }
  return arr
}
module.exports = {
  generateBinartTree,
  TreeNode,
  treeToArray
}
