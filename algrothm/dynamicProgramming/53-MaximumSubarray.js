/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [nums[0]]
  let ret = dp[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    ret = Math.max(ret, dp[i])
  }
  return ret
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2, -1]))
console.log(maxSubArray([-1, -2]))
console.log(maxSubArray([-1]))