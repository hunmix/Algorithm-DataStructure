/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 递归
// var findTargetSumWays = function(nums, S) {
//   const memo = []
//   for (let i = 0; i <= nums.length; i++) {
//     memo.push([])
//   }
//   return dfs(nums, S, 0, memo)
// };

// const dfs = (nums, s, index, memo, sum = 0) => {
//   if (index === nums.length && sum === s) {
//     return 1
//   }
//   if (index === nums.length) {
//     return 0
//   }
//   if (memo[index][sum] !== undefined) {
//     return memo[index][sum]
//   }
//   let ans = 0
//   ans += dfs(nums, s, index + 1, memo, sum + nums[index])
//   ans += dfs(nums, s, index + 1, memo, sum - nums[index])
//   memo[index][sum] = ans
//   return ans
// }


// dp
var findTargetSumWays = function(nums, S) {

};


console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
console.log(findTargetSumWays([2,7,9,13,27,31,37,3,2,3,5,7,11,13,17,19,23,29,47,53], 27))