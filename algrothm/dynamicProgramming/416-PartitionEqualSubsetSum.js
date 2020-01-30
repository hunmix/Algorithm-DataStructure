/**
 * @param {number[]} nums
 * @return {boolean}
 */
//1. 递归
// var canPartition = function(nums) {
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
//   if (sum % 2 !== 0) {
//     return false
//   }
//   sum /= 2
//   const memo = []
//   for (let i = 0; i < nums.length; i++) {
//     memo.push(new Array(sum + 1).fill(-1))
//   }
//   const res = _canPartition(nums, sum, nums.length - 1, memo)
//   return res
// };
// // memo[i][c] 使用索引为[0...i]的元素是否可以完全填充一个容量为c的背包
// const _canPartition = (nums, sum, index, memo) => {
//   if (sum === 0) {
//     return true
//   }
//   if (index < 0 || sum < 0) {
//     return false
//   }
//   if (memo[index][sum] !== -1) {
//     return !!memo[index][sum]
//   }
//   memo[index][sum] = _canPartition(nums, sum, index - 1, memo) || _canPartition(nums, sum - nums[index], index - 1, memo) ? 1 : 0
//   return memo[index][sum] == 1
// }

// dp
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) {
    return false
  }
  sum /= 2
  const dp = [true]
  for (let i = 1; i <= sum; i++) {
    dp[i] = (nums[0] === i)
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = sum; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[sum]
};

console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([1,2,5]))