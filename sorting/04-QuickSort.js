const { swap } = require('../utils')
const { insertionSortByRange } = require('./02-Insertion-Sort')

// 快速排序
function quickSort (arr) {
  _quickSort(arr, 0, arr.length - 1)
}
const _quickSort = (arr, l, r) => {
  // if (l > r) {
  //   return
  // }
  // 优化, 数量少于15时, 使用插入排序
  if (r - l <= 15) {
    insertionSortByRange(arr, l, r)
    return
  }
  const p = _partition(arr, l, r) // 分拣操作
  _quickSort(arr, l, p - 1)
  _quickSort(arr, p + 1, r)
}
const _partition = (arr, l, r) => {

  // 优化, 随机选择标定, 避免在计算近乎有序数组时耗时过长问题, random生成数区间为[0, 1)
  const randomIndex = Math.floor(Math.random() * (r - l + 1) + l)
  swap(arr, l, randomIndex)

  const v = arr[l] // 选取一个值作为比较标准
  let j = l
  // arr[l+1...j] < v; arr[j+1...i] > v
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      swap(arr, i, j + 1)
      j++
    }
  }
  // 选定值与j位置元素互换, 形成左边 < v, 右边 > v
  swap(arr, l, j)
  return j
}
module.exports = {
  quickSort
}