/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1、回溯
// var permuteUnique = function(nums) {
//   if (nums.length <= 0) {
//     return []
//   }
//   const ret = []
//   const map = new Map()
//   const used = []
//   _permuteUnique(nums, 0, ret, map, used)
//   return ret
// };

// const _permuteUnique = (nums, index, result, map, used, arr = []) => {
//   if (index === nums.length) {
//     if (!map.has(arr.join())) {
//       result.push([...arr])
//       map.set(arr.join(), true)
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (!used[i]) {
//       arr.push(nums[i])
//       used[i] = true
//       _permuteUnique(nums, index + 1, result, map, used, arr)
//       arr.pop()
//       used[i] = false
//     }
//   }
// }
// 2. 剪枝
var permuteUnique = function(nums) {
  if (nums.length <= 0) {
    return []
  }
  nums = nums.sort((a, b) => a - b)
  const ret = []
  const used = []
  _permuteUnique(nums, 0, ret, used)
  return ret
};

const _permuteUnique = (nums, index, result, used, arr = []) => {
  if (index === nums.length) {
    result.push([...arr])
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      // 在used[i - 1]刚刚被撤销且下一个选择数字与之相同的情况下剪枝
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      arr.push(nums[i])
      used[i] = true
      _permuteUnique(nums, index + 1, result, used, arr)
      arr.pop()
      used[i] = false
    }
  }
}

console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([]))