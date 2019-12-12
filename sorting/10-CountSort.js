// 计数排序
function countSort (arr) {
  // 找到最大数
  let max
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  // 新建数组(感觉js不建也 无所谓- -)
  const temp = new Array(max + 1)
  for (let i = 0; i < arr.length; i++) {
    temp[arr[i]]++
  }
  // 取出数字赋回原数组
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i]
  }
}

module.exports = {
  countSort
}
