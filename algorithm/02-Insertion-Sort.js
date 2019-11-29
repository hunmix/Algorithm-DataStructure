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
module.exports = insertionSort