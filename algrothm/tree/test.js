const { generateBinartTree, treeToArray, TreeNode } = require('../../dataStructure/tree/00-BinaryTree')
const test = (fn, data, ...res) => {
  const ret = fn(generateBinartTree(data), ...res)
  console.log(ret)
  return ret
}
const test2 = (fn, data, ...res) => {
  const ret = treeToArray(fn(generateBinartTree(data), ...res))
  console.log(ret)
  return ret
}
// module.exports = {
//   test
// }
exports.test = test
exports.test2 = test2
exports.treeToArray = treeToArray
exports.generateBinartTree = generateBinartTree
exports.TreeNode = TreeNode