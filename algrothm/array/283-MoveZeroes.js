/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[cur] = nums[i]
      cur++
    }
  }
  for (let i = cur; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))