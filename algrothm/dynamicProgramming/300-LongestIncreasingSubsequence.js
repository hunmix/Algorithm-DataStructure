/**
 * @param {number[]} nums
 * @return {number}
 */
// dp
var lengthOfLIS = function(nums) {
  if (nums.length <= 0) {
    return 0
  }
  const dp = new Array(nums.length).fill(1)
  let ret = 1
  // 在dp[i]: [0...i]范围中的以i为结尾的最长上升子序列
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
        ret = Math.max(ret, dp[i])
      }
    }
  }
  return ret
};


// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// console.log(lengthOfLIS([4,10,4,3,8,9]))
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))