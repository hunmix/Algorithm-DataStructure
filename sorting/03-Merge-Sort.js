const { insertionSortByRange } = require('./02-Insertion-Sort')
// 归并排序
function mergeSort (arr) {
  _mergeSort(arr, 0, arr.length - 1)
  return arr
}

function _mergeSort (arr, l, r) {
  // if (l >= r) {
  //   return
  // }
  // 优化2: 在数组数量较少时, 使用插入排序
  if (r - l  < 15) {
    insertionSortByRange(arr, l, r)
    return
  }
  const mid = Math.floor((l + r) / 2)
  // arrL: [l, mid], arrR: [mid + 1, r]
  _mergeSort(arr, l, mid)
  _mergeSort(arr, mid + 1, r)
  // 优化1: 当左数组中的最大值小于有数组中的最小值时, 不需要进行归并操作
  if (arr[mid] > arr[mid + 1]) {
    _merge(arr, l, mid, r)
  }
}
// 归并排序自底向上
function mergeSortBottomUp (arr) {
  const len = arr.length
  for (let size = 1; size <= len; size += size) {
    // i + size < len 保证右数组存在, 否则没有归并的必要
    for (let i = 0; i + size < len; i += size * 2) {
      // console.log(i, i + size - 1, Math.min((i + size * 2 - 1), len - 1))
      // 对[i, i + size - 1]和[i + size, i + size * 2 - 1]进行归并
      _merge(arr, i, i + size - 1, Math.min((i + size * 2 - 1), len - 1))
    }
  }
  // console.log(arr)
}

// 归并数组
function _merge (arr, l, mid, r) {
  const aux = []
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }
  let i = l
  let j = mid + 1
  // 遍历辅助数组, 对[l, mid], [mid + 1, r]两个数组进行规定
  for (let k = l; k <= r; k++) {
    
    if (i > mid) { // 左数组已经归并完毕
      arr[k] = aux[j - l]
      j++
    } else if (j > r) { // 右数组已经归并完毕
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {  // 左数组索引的数大于右数组
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] >= aux[j - l]) {// 左数组索引的数小于等于右数组, 注意相等的情况, 直接else也行
      arr[k] = aux[j - l]
      j++
    }
  }
}
module.exports = {
  mergeSort,
  mergeSortBottomUp
}