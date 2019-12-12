// 冒泡排序
function bubbleSort (arr) {
  // arr[len-i-1...len-1)有序, 瞅着这么奇怪呢
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}
// 交换元素
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
module.exports = {
  bubbleSort
}
