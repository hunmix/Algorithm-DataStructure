const { insertionSort } = require('./02-InsertionSort')
// 桶排序
function bucketSort (arr) {
  let min = arr[0]
  let max = arr[0]
  // 获取最大值和最小值
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  // 桶放的个数
  const BUCKET_SIZE = 10
  // 初始化桶, 一个桶放BUCKET_SIZE个
  const bucketNum = Math.floor((max - min) / BUCKET_SIZE) + 1
  const bucket = []
  for (let i = 0;  i < bucketNum; i++) {
    bucket.push([])
  }
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - min) / BUCKET_SIZE)
    bucket[index].push(arr[i])
  }
  let count = 0
  // 各个桶排序 TODO: 桶中用链表储存
  for (let i = 0; i < bucketNum; i++) {
    insertionSort(bucket[i])
    // bucket[i].sort((a, b) => a - b) // 用原生sort方法血快怎么
    for (let j = 0; j < bucket[i].length; j++) {
      arr[count++] = bucket[i][j]
    }
  }
}


module.exports = {
  bucketSort
}
