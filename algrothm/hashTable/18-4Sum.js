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
  const arr = nums.sort()
  if (arr[0] > target) {
    return ret
  }
  for (let i = 0; i < arr.length - 3; i++) {
    // 四个最小值相加大于0, 则后面找不到等于零的解了
    if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) {
      return ret
    }
    if (arr[i] === arr[i - 1]) {
      continue
    }
    for (let l = i + 1; l < arr.length - 2; l++) {
      if (arr[l] === arr[l - 1]) {
        continue
      }
      let r = arr.length - 1
      let j = l + 1
      while (j < r) {
        const sum = arr[i] + arr[l] + arr[j] + arr[r]
        if (sum === target) {
          ret.push([arr[i], arr[l], arr[j], arr[r]])
          while (arr[j] === arr[++j]) {}
          while (arr[r] === arr[--r]) {}
        } else if (sum < target) {
          j++
        } else if (sum > target) {
          r--
        }
      }
    }
  }
  return ret
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([0, 0, 0, 0, 0, 0, 0], 0))
