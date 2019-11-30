const { swap } = require('../utils')
const { insertionSortByRange } = require('./02-Insertion-Sort')

function quickSort3Ways (arr) {
  _quickSort3Ways(arr, 0, arr.length - 1)
}
const _quickSort3Ways = (arr, l, r) => {
  if (r - l < 15) {
    insertionSortByRange(arr, l, r)
    return
  }
  const [lt, gt] = _partition3Ways(arr, l, r)
  _quickSort3Ways(arr, l, lt)
  _quickSort3Ways(arr, gt, r)
}

const _partition3Ways = (arr, l, r) => {
  const randomIndex = Math.floor(Math.random() * (r - l + 1) + l)
  swap(arr, l, randomIndex)

  const v = arr[l]
  // arr[l+1...lt] < v; arr[lt+1...i-1] = v; arr[gt...r] > v
  let lt = l
  let gt = r + 1
  let i = l + 1
  while (i < gt) {
    if (arr[i] < v) {
      swap(arr, i, ++lt)
      i++
    } else if (arr[i] > v) {
      swap(arr, i, --gt)
    } else {
      i++
    }
  }
  swap(arr, l, lt)
  return [lt - 1, gt]
}

module.exports = {
  quickSort3Ways
}