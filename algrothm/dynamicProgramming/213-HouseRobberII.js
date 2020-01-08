/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
   let pre = 0
  let cur = 0
  let pre2 = 0
  let cur2 = 0
  // 分别计算除去头尾的最大金额, 取最大值
  for (let i = 1; i < nums.length; i++) {
    const temp = cur
    cur = Math.max(cur, pre + nums[i - 1])
    pre = temp
    const temp2 = cur2
    cur2 = Math.max(cur2, pre2 + nums[i])
    pre2 = temp2
  }
  return Math.max(cur, cur2)
};
console.log(rob([2,3,2]))
console.log(rob([1,2,3,1]))
console.log(rob([1]))
console.log(rob([]))
console.log(rob([1, 2]))