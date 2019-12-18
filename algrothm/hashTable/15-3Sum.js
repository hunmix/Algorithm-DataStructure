/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given array nums = [-1, 0, 1, 2, 2, -1, -4],
// [-4, -1, -1, 0, 1, 2]

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
var threeSum = function(nums) {
  const ret = []
  // 数组小于三个时, 不存在值
  if (nums.length < 3) {
    return ret
  }
  const arr = nums.sort((a, b) => a - b)
  // arr[l...r]中寻找i的值, arr[l, i r]组成result
  for (let l = 0; l < arr.length; l++) {
    // 第一个数字大于零时不存在和等于零的可能性, 直接返回ret
    if (arr[l] > 0) {
      return ret
    }
    // 跳过重复项
    if (arr[l] === arr[l - 1]) {
      continue
    }
    let i = l + 1 // 当中指针
    let r = arr.length - 1 // 右指针
    while (i < r) {
      const sum = arr[l] + arr[i] + arr[r]
      // 和为零时更新ret, 并且跳过重复项
      if (sum === 0) {
        ret.push([arr[l], arr[i], arr[r]])
        while(arr[i] === arr[++i]) {}
        while(arr[r] === arr[--r]) {}
      // 总和过小, 向右移动i指针
      } else if (sum < 0) {
        i++
      // 总和过大, 右指针向左移动
      } else if (sum > 0) {
        r--
      }
    }
  }
  return ret
};

console.log(threeSum([-1, -1, 0, 1, 2, 2, 2, 2, -1, -4]))