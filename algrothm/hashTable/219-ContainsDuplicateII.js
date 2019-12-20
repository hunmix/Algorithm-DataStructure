/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {
//   const map = new Map()
//   let i = 0
//   let j = -1
//   // arr[j+1]是否和arr[i...j]中有相同的元素
//   while (j + 1 < nums.length) {
//     // 窗口大小没到k, 移动右指针
//     if (j - i < k) {
//       j++
//     // 窗口大小已经是k, 整个窗口向右移动一格
//     } else {
//       map.delete(nums[i])
//       i++
//       j++
//     }
//     // 判断j+1的值是否已经在窗口中存在
//     if (map.has(nums[j])) {
//       return true
//     } else {
//       map.set(nums[j], j)
//     }
//   }
//   return false
// };
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 判断当前数字是否在窗口中
    if (map.has(nums[i])) {
      return true
    }
    map.set(nums[i])
    // 窗口大小大于k时, 向右移动整个窗口
    if (map.size > k) {
      map.delete(nums[i - k])
    }
  }
  return false
};
console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))