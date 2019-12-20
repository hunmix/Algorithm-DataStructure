/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let min = Number.MAX_VALUE // 最小绝对值, 因为有唯一解, 不考虑无解的情况
  let ret = null
  const arr = nums.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    let l = i + 1
    let r = arr.length - 1
    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r]
      // 计算最小绝对值
      const abs = Math.abs(sum - target)
      if (abs < min) {
        min = abs
        ret = sum
      // 绝对值小于target, 左指针向右移动
      } else if (sum < target) {
        l++
      // 绝对值大于target, 右指针向左移动
      } else {
        r--
      }
    }
  }
  return ret
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 2, 1, -3], 1))