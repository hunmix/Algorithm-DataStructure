// 基数排序
function radixSort (arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  const bucket = new Array(10)
  for (let i = 0; i < bucket.length; i++) {
    bucket[i] = []
  }
  // 仅整数
  const n = max.toString().length
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
      const num = Math.floor(arr[j] / (10 ** i / 10) % 10)
      bucket[num].push(arr[j])
    }
    let count = 0
    for (let i = 0; i < bucket.length; i++) {
      while(bucket[i] && bucket[i].length > 0) {
        arr[count++] = bucket[i].shift()
      }
    }
  }
}

module.exports = {
  radixSort
}
