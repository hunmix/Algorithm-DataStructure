// 希尔排序
function shellSort (arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i > 0; i = Math.floor(i / 2)) {
    // 遍历每个数组, j为要插入到前面已排序数组的索引
    for (let j = i; j < len; j++) {
      // 单个数组排序
      let k = j
      while (k - i >= 0 && arr[k] < arr[k - i]) {
        swap(arr, k, k - i)
        k -= i
      }
    }
  }
}
// 交换数组元素
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = {
  shellSort
}
