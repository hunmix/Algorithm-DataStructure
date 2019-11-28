/**
 * 生成随机整数数组
 * @param {Number} n 数量
 * @param {Number} rangeL 左范围
 * @param {Number} rangeR 右范围
 */
exports.generareRandomArray = (n, rangeL, rangeR) => {
  if (rangeL > rangeR) {
    throw Error('rangeR must greater than rangeL')
  }
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (rangeR - rangeL) + rangeL))
  }
  return arr
}
exports.print = (arr) => {
  console.log(arr.join(' '))
}