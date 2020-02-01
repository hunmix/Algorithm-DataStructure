/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }
  const dp = new Array(nums.length).fill(1)
  dp[0] = 1
  dp[1] = nums[0] !== nums[1] ? 2 : 1
  for (let i = 2; i < nums.length; i++) {
    for (let j = 1; j < i; j++) {
      if (dp[j] <= 1 && nums[i] !== nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      } else if ((nums[i] - nums[j] < 0 && nums[j] - nums[j - 1] > 0) || (nums[i] - nums[j] > 0 && nums[j] - nums[j - 1] < 0)) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }
  return Math.max(...dp)
};

console.log(wiggleMaxLength([1,7,4,9,2,5]))
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]))
console.log(wiggleMaxLength([8]))
console.log(wiggleMaxLength([]))
console.log(wiggleMaxLength([1, 2]))
console.log(wiggleMaxLength([0,0,0]))
console.log(wiggleMaxLength([3,3,3,2,5]))