/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // 构建最大堆
  const maxHeap = new Heap(stones)
  // 取出两个最大值进行操作
  while (maxHeap.count >= 2) {
    const stone1 = maxHeap.extractMax()
    const stone2 = maxHeap.extractMax()
    const diff = stone1 - stone2
    if (diff !== 0) {
      maxHeap.insert(diff)
    }
  }
  const ret = []
  while (!maxHeap.isEmpty()) {
    ret.push(maxHeap.extractMax())
  }
  return ret
};
// maxHeap, 手写一遍, 防老年痴呆
class Heap{
  constructor (arr) {
    this.data = []
    this.count = 0
    this._heapify(arr)
  }
  extractMax () {
    const ele = this.data[1]
    this.data[1] = this.data[this.count--]
    this._shiftDown(1)
    return ele
  }
  insert (ele) {
    this.data[++this.count] = ele
    this._shiftUp(this.count)
  }
  isEmpty () {
    return this.count <= 0
  }
  _heapify (arr) {
    if (arr.length <= 0) {
      this.data = []
      return
    }
    this.data = [, ...arr]
    this.count = arr.length
    const k = Math.floor(this.count / 2)
    for (let i = k; i >= 1; i--) {
      this._shiftDown(i)
    }
  }
  _shiftUp (k) {
    while (k > 1) {
      const parent = Math.floor(k / 2)
      if (this.data[k] <= this.data[parent]) {
        break
      }
      this._swap(this.data, k, parent)
      k = parent
    }
  }
  _shiftDown (k) {
    while (k * 2 <= this.count) {
      let j = k * 2
      if (j + 1 <= this.count && this.data[j + 1] > this.data[j]) {
        j++
      }
      if (this.data[k] >= this.data[j]) {
        break
      }
      this._swap(this.data, k, j)
      k = j
    }
  }
  _swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

console.log(lastStoneWeight([2,7,4,1,8,1]))
console.log(lastStoneWeight([10,4,2,10]))