const { swap } = require('../utils')
// 原地堆排序
function heapSort2 (arr) {
  const len = arr.length
  // heapify
  for (let i = Math.floor((len - 1 - 1) / 2); i >= 0; i--) {
    _shiftDown(arr, len - 1, i)
  }
  // 将堆顶元素与数组最后的元素互换, 并堆前面部分数组进行shiftDown, 恢复最大堆
  // arr[i...len-1]
  for (let i = len - 1; i > 0; i--) {
    swap(arr, i, 0)
    _shiftDown(arr, i - 1, 0)
  }
}
const _shiftDown = (arr, n, k) => {
  const temp = arr[k]
  while (k * 2 + 1 <= n) {
    let j = k * 2 + 1
    if (j + 1 <= n && arr[j + 1] > arr[j]) {
      j++
    }
    if (temp >= arr[j]) {
      break
    }
    arr[k] = arr[j]
    k = j
  }
  arr[k] = temp
}
module.exports = {
  heapSort2
}