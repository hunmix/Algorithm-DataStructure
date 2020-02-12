/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(target - nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) !== i) {
      return [i, map.get(nums[i])]
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))