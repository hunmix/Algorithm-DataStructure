/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length
  nums.reverse()
  let l = 0
  let r = k - 1
  while (l < r) {
    const temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp
    l++
    r--
  }
  l = k
  r = nums.length - 1
  while (l < r) {
    const temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp
    l++
    r--
  }
  return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1], 2))