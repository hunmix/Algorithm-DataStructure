// 二分查找
function binarySearch (arr, target) {
  // 在arr[l...r]中寻找target
  let l = 0
  let r = arr.length - 1
  let mid = l + Math.floor((r - l) / 2)
  while (l <= r) {
    if (arr[mid] === target) {
      return mid
    }
    // [mid+1...r]
    if (target > arr[mid]) {
      l = mid + 1
    // [l...mid-1]
    } else {
      r = mid - 1
    }
    mid = l + Math.floor((r - l) / 2)
  }
  return - 1
}
console.log(binarySearch([-1,0,3,5,9,12], 9))
module.exports = binarySearch
