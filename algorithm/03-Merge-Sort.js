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
    } else if (aux[i - l] > aux[j - l]) {// 右数组索引的数大于左数组
      arr[k] = aux[j - l]
      j++
    }
  }
}
// 使用插入排序[l, r]范围内的元素
function insertionSortByRange (nums, l, r) {
  for (let i = l + 1; i <= r; i++) {
    const ele = nums[i]
    let j
    for (j = i; j > l && ele < nums[j - 1]; j--) {
      nums[j] = nums[j - 1]
    }
    nums[j] = ele
  }
}

module.exports = mergeSort
