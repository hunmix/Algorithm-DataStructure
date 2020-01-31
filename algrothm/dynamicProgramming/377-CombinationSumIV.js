/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = [1]
  for (let i = 1; i <= target; i++) {
    dp[i] = 0
  }
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[target]
};

console.log(combinationSum4([1, 2, 3], 4))