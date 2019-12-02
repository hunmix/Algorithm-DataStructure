// 二分查找
function binarySearch (arr, target) {
  // 在arr[l...r]中寻找target
  let l = 0
  let r = arr.length - 1
  // 防止大整数溢出
  let mid = l + (r - l) / 2
  while (l <= r) {
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      // arr[mid+1...r]
      l = mid + 1
    } else {
      // arr[l...mid-1]
      r = mid - 1
    }
    mid = l + (r - l) / 2
  }
  return -1
}
console.log(binarySearch([1,2,3,4,5,6,7], 9))
module.exports = binarySearch
