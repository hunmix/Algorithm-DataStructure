const { swap } = require('../utils')
const { insertionSortByRange } = require('./02-Insertion-Sort')

// 快速排序
function quickSort2 (arr) {
  _quickSort2(arr, 0, arr.length - 1)
}
const _quickSort2 = (arr, l, r) => {
  // if (l > r) {
  //   return
  // }
  // 优化, 数量少于15时, 使用插入排序
  if (r - l <= 15) {
    insertionSortByRange(arr, l, r)
    return
  }
  const p = _partition2(arr, l, r) // 分拣操作
  _quickSort2(arr, l, p - 1)
  _quickSort2(arr, p + 1, r)
}
const _partition2 = (arr, l, r) => {

  // 优化, 随机选择标定, 避免在计算近乎有序数组时耗时过长问题, random生成数区间为[0, 1)
  const randomIndex = Math.floor(Math.random() * (r - l + 1) + l)
  swap(arr, l, randomIndex)

  const v = arr[l] // 选取一个值作为比较标准
  // arr[l+1...i) < v; arr(j...r] > v
  let i = l + 1
  let j = r
  while (true) {
    // 找到左边大于v的元素
    while (i <= r && arr[i] < v) i++
    // 找到右边小于v的元素
    while (j >= l + 1 && arr[j] > v) j--
    if (i > j) break
    // 交换元素
    swap(arr, i, j)
    // 移动索引至下一次查找
    i++
    j--
  }
  // 与标定点交换位置
  swap(arr, l, j)
  return j
}
module.exports = {
  quickSort2
}