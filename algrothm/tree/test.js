const { generateBinartTree, treeToArray } = require('../../dataStructure/tree/00-BinaryTree')
const test = (fn, ...res) => {
  const ret = fn(generateBinartTree(...res))
  console.log(ret)
  return ret
}
const test2 = (fn, ...res) => {
  const ret = treeToArray(fn(generateBinartTree(...res)))
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