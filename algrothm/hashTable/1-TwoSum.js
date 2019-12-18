/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  // 使用map存储每个值
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }
  // target - nums[i]是否存在
  for (let i = 0; i < nums.length; i++) {
    const index = map.get(target - nums[i])
    // 排除同一元素使用两次的情况
    // 数组中有相同元素的情况下, map中的元素索引值会被覆盖, 此时i是先出现的元素索引, map中是第二个相同值的元素索引(题中说明只有一个唯一解)
    if (map.has(target - nums[i]) && index !== i) {
      return [i, index]
    }
  }
};

console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 3, 4], 6))