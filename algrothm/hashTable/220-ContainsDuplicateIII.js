/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (isInRange(map, nums[i], t)) {
      return true
    }
    map.set(nums[i])
    if (map.size > k) {
      map.delete(nums[i - k])
    }
  }
  return false
};
// 判断num和窗口中的数组差的绝对值是否 <= t
function isInRange (map, num, t) {
  for (let key of map.keys()) {
    if (Math.abs(num - key) <= t) {
      return true
    }
  }
  return false
}
console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))