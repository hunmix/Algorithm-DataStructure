const { swap } = require('../../utils')

// 最大索引堆
class IndexMaxHeap {
  constructor () {
    this.data = []
    this._indexes = []
    this._count = 0
  }
  // 用户使用索引从0开始
  insert (ele) {
    this.data[++this._count] = ele
    this._indexes[this._count] = this._count
    this._shiftUp(this._count)
  }
  extractMax () {
    const item = this.data[this._indexes[1]]
    swap(this._indexes, 1, this._count--)
    this._shiftDown(1)
    return item
  }
  // 获取堆顶元素的索引
  getMaxIndex () {
    // 用户索引以0开始
    return this._indexes[1] - 1
  }
  // 获取最大索引堆中索引为i的元素
  getItem (i) {
    if (i + 1 < 1) {
      console.log('index must gt 0')
      return
    }
    return this.data[i + 1]
  }
  // 将索引堆中索引为i的元素改为newEle
  change (i, newEle) {
    i++
    this.data[i] = newEle
    for (let j = 1; j <= this._count; j++) {
      if (this._indexes[j] === i) {
        this._shiftUp(j)
        this._shiftDown(j)
      }
    }
  }
  size () {
    return this._count
  }
  isEmpty () {
    return this._count === 0
  }
  _shiftUp (k) {
    const temp = this._indexes[k]
    while (k > 1 && this.data[temp] > this.data[this._indexes[Math.floor(k / 2)]]) {
      const parentIndex = this._indexes[Math.floor(k / 2)]
      this._indexes[k] = parentIndex
      // swap(this._indexes, k, parentIndex)
      k = Math.floor(k / 2)
    }
    this._indexes[k] = temp
  }
  _shiftDown (k) {
    // 优化, 保存索引值最后在交换
    let temp = this._indexes[k]
    // 子节点存在
    while (k * 2 <= this._count) {
      let j = k * 2
      // 左右子节点取最大值索引
      if (j + 1 <= this._count && this.data[this._indexes[j + 1]] > this.data[this._indexes[j]]) {
        j++
      }
      // 左右子节点最大值与当前值比较以确定是否需要交换
      if (this.data[temp] >= this.data[this._indexes[j]]) {
        break
      }
      this._indexes[k] = this._indexes[j]
      // swap[this.data, k, j]
      k = j
    }
    this._indexes[k] = temp
  }
  // 打印树, 每层arr[2的n次方...2 * 2的n次方)
  print () {
    if (this._count  > 100) {
      console.log('tree is too large to display')
      return
    }
    const depth = Math.ceil(Math.log2(this._count))
    let tree = ''
    for (let i = 0; i <= depth; i++) {
      let layer = ''
      const spaceNum = Math.pow(2, depth - i)
      let space = ''
      for (let k = 0; k < spaceNum; k++) {
        space += ' '
      }
      for (let j = Math.pow(2, i); j <= this._count && j < 2 * Math.pow(2, i); j++) {
        layer += `${space}${this.data[this._indexes[j]]}${space}`
      }
      tree += layer + '\n'
    }
    console.log(tree)
  }
}

const indexMaxHeap = new IndexMaxHeap()

for (let i = 1; i < 10; i++) {
  indexMaxHeap.insert(i)
}
indexMaxHeap.print()
// indexMaxHeap.extractMax()
indexMaxHeap.change(4, 40)
indexMaxHeap.print()
module.exports = IndexMaxHeap
