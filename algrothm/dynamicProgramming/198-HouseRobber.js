/**
 * @param {number[]} nums
 * @return {number}
 */
// 1: 递归(超时)
// var rob = function(nums) {
//   if (nums.length <= 0) {
//     return 0
//   }
//   const memo = []
//   return _rob(nums, 0, memo)
// };
// const _rob = (nums, num, memo) => {
//   if (memo[num]) {
//     return memo[num]
//   }
//   if (num > nums.length - 1) {
//     return 0
//   }
//   let ret = 0
//   // memo[i] = max(nums[i], _rob(i + 2))
//   for (let i = num; i < nums.length; i++) {
//     ret = Math.max(ret, nums[i] + _rob(nums, i + 2, memo))
//   }
//   memo[num] = ret
//   return ret
// }
// dp
// var rob = function(nums) {
//   if (nums.length <= 0) {
//     return 0
//   }
//   // dp[i] = max(dp[i - 1], dp[i - 2] + nums[i - 1])
//   const dp = [0, nums[0]]
//   for (let i = 2; i <= nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
//   }
//   return dp[nums.length]
// };
// dp: 空间优化
var rob = function(nums) {
  if (nums.length <= 0) {
    return 0
  }
  let pre = 0
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    const temp = cur
    cur = Math.max(pre + nums[i], cur)
    pre = temp
  }
  return cur
};
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([]))
console.log(rob([1, 2]))
console.log(rob([2,1,1,2]))
console.log(rob([1]))
