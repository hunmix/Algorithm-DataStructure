// 选择排序
function selectionSort (nums) {
  for (let i = 0; i < nums.length; i++) {
    const minIndex = i
    // 寻找[i, n)区间中的最小值
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        // 交换位置
        let temp = nums[minIndex]
        nums[i] = nums[j]
        nums[j] = temp
        // [nums[i], nums[j]] = [nums[j], nums[i]] // 用这个方法速度会变慢
      }
    }
  }
  return nums
}
module.exports = selectionSort
