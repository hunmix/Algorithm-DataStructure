const { generareRandomArray, print } = require('../utils')
// 选择排序
function selectionSort (nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i
    // 寻找[i, n)区间中的最小值
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        // 交换位置
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  return nums
}
print(selectionSort(generareRandomArray(50, 0, 50)))