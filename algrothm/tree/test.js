const { generateBinartTree, treeToArray } = require('../../dataStructure/tree/00-BinaryTree')
const test = (fn, ...res) => {
  const ret = fn(generateBinartTree(...res))
  console.log(ret)
  return ret
}

module.exports = {
  test
}