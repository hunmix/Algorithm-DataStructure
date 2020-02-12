/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 索引
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
    return false
  }
  nums.sort()
  let prev = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[prev] === nums[i]) {
      return true
    }
    prev++
  }
  return false
};
// 表查找
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
    return false
  }
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true
    }
    map.set(nums[i], true)
  }
  return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1]))
console.log(containsDuplicate([]))