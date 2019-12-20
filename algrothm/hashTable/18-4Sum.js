/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 从左到右指针分别为i, l, j, r, 寻找最后两个值的区间为[j...r]
var fourSum = function(nums, target) {
  const ret = []
  if (nums.length < 4) {
    return ret
  }
  const arr = nums.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 3; i++) {
    // 最小和比target大, 直接返回ret
    if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) {
      break
    }
    while (arr[i - 1] === arr[i]) {
      i++
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      // 剔除重复项, 跳过第一项, 避免第一项跟i指针的值重复被剔除
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue
      }
      let l = j + 1
      let r = arr.length - 1
      while (l < r) {
        const sum = arr[i] + arr[j] + arr[l] + arr[r]
        if (sum === target) {
          ret.push([arr[i], arr[j], arr[l], arr[r]])
          // 剔除重复项
          while (arr[l] === arr[++l]) {}
          while (arr[r] === arr[--r]) {}
        } else if (sum < target) {
          l++
        } else if (sum > target) {
          r--
        }
      }
    }
  }
  return ret
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// console.log(fourSum([0, 0, 0, 0, 0, 0, 0], 0))
console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9))
