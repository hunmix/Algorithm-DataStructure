/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 哈希 + 数组排序
// var topKFrequent = function(nums, k) {
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1)
//     } else {
//       map.set(nums[i], 1)
//     }
//   }
//   const arr = []
//   for (let [key, value] of map.entries()) {
//     arr.push({ key, value })
//   }
//   arr.sort((a, b) => b.value - a.value)
//   return arr.slice(0, k).map(obj => obj.key)
// };
// 哈希 + 堆
var topKFrequent = function(nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  const minHeap = new MinHeap()
  map.forEach((value, key) => {
    if (minHeap.size() === k) {
      if (minHeap.getMin().value < value) {
        minHeap.extractMin()
        minHeap.insert({ value, key })
      }
    } else {
      minHeap.insert({ value, key })
    }
  })
  const ret = []
  while (!minHeap.isEmpty()) {
    ret.unshift(minHeap.extractMin().key)
  }
  return ret
};

class MinHeap {
  constructor (arr = []) {
    this.data = []
    this._count = 0
    this._heapify(arr)
  }
  getMin () {
    return this.data[0]
  }
  // 获取最小值
  extractMin () {
    const min = this.data[0]
    this.data[0] = this.data[--this._count]
    this._shiftDown(0)
    return min
  }
  insert (v) {
    this.data[this._count] = v
    this._shiftUp(this._count)
    this._count++
  }
  size () {
    return this._count
  }
  isEmpty () {
    return this._count === 0
  }
  _heapify (arr) {
    this.data = [...arr]
    this._count = arr.length
    if (this._count <= 1) {
      return
    }
    let k
    for (let k = Math.floor((this._count - 1) / 2); k >= 0; k--) {
      this._shiftDown(k)
    }
  }
  _shiftDown (k) {
    const temp = this.data[k]
    while (k * 2 + 1 < this._count) {
      let j = k * 2 + 1
      // 获取子节点数值较小的节点
      if (j + 1 < this._count && this.data[j + 1].value < this.data[j].value ) {
        j += 1
      }
      if (temp.value < this.data[j].value) {
        break
      }
      this.data[k] = this.data[j]
      k = j
    }
    this.data[k] = temp
  }
  _shiftUp (k) {
    const temp = this.data[k]
    while (k > 0 && temp.value < this.data[Math.floor((k - 1) / 2)].value) {
      this.data[k] = this.data[Math.floor((k - 1) / 2)]
      k = Math.floor((k - 1) / 2)
    }
    this.data[k] = temp
  }
}
// console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([3,0,1,0], 1))