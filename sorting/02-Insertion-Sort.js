const { generareRandomArray, testSort } = require('../utils')
// 选择排序
function insertionSort (nums) {
  for (let i = 1; i < nums.length; i++) {
    // 保存要插入的值
    let ele = nums[i]
    // 保存ele应该插入的位置
    let j
    // 从右向左与ele比较, 遇到比ele大的数则停止循环, 将ele插入j的位置
    for (j = i; j > 0 && nums[j - 1] > ele ; j--) {
      nums[j] = nums[j - 1]
    }
    nums[j] = ele
  }
}

// 使用插入排序[l, r]范围内的元素
function insertionSortByRange (nums, l, r) {
  for (let i = l + 1; i <= r; i++) {
    const ele = nums[i]
    let j
    for (j = i; j > l && ele < nums[j - 1]; j--) {
      nums[j] = nums[j - 1]
    }
    nums[j] = ele
  }
}

module.exports = {
  insertionSort,
  insertionSortByRange
}
