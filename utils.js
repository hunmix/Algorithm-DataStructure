/**
 * 生成随机整数数组
 * @param {Number} n 数量
 * @param {Number} rangeL 左范围
 * @param {Number} rangeR 右范围
 */
const generareRandomArray = (n, rangeL, rangeR) => {
  if (rangeL > rangeR) {
    throw Error('rangeR must greater than rangeL')
  }
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (rangeR - rangeL) + rangeL))
  }
  return arr
}
/**
 * 生成近乎有序的数组
 * @param {Number} n 生成数字数量
 * @param {Number} swapTimes 交换次数
 */
const generateNearlyOrderedArray = (n, swapTimes) => {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }
  for (let i = 0; i < swapTimes; i++) {
    const posX = Math.floor(Math.random() * n)
    const posY = Math.floor(Math.random() * n)
    let temp = arr[posY]
    arr[posY] = arr[posX]
    arr[posX] = temp
  }
  return arr
}
const print = (arr) => {
  console.log(arr.join(' '))
}

const isSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}
/**
 * 测试排序行能
 * @param {String} sortName 函数名
 * @param {Function} sortFn 函数引用
 * @param {Array} arr 数组
 */
const testSort = (sortName, sortFn, arr) => {
  const start = Date.now()
  sortFn(arr)
  const end = Date.now()

  const isSuccess = isSort(arr)
  console.log(`${sortName}: ${isSuccess ? 'successful' : 'failed'} ${(end - start) / 1000}s`)
}

module.exports = {
  generareRandomArray,
  generateNearlyOrderedArray,
  testSort,
  print
}