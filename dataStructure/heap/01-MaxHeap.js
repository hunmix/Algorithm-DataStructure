const { swap } = require('../../utils')
// 最大二叉堆
class MaxHeap {
  constructor (arr) {
    this.data = []
    this._count = 0
    this._heapify(arr)
  }
  insert (ele) {
    // this.data.push(ele)
    this.data[++this._count] = ele
    this._shiftUp(this._count)
  }
  // 从最大堆中取出堆顶元素, 即最大值
  extractMax () {
    const item = this.data[1]
    this.data[1] = this.data[this._count--]
    this._shiftDown(1)
    return item
  }
  size () {
    return this._count
  }
  isEmpty () {
    return this._count === 0
  }
  _heapify (arr) {
    this.data = [, ...arr]
    this._count = arr.length
    let k = Math.floor(this._count / 2) // 第一个非叶子节点元素
    for (let i = k; i >= 1; i--) {
      this._shiftDown(i)
    }
  }
  // 索引的值是否需要向上移动保持最大堆
  _shiftUp (k) {
    // 优化: 使用临时变量保存初始值, 并在结束时放到最后的位置
    const temp = this.data[k]
    // 与父节点比较大小并交换
    while (k > 1 && temp > this.data[Math.floor(k / 2)]) {
      const parentIndex = Math.floor(k / 2)
      // swap(this.data, k, parentIndex)
      this.data[k] = this.data[parentIndex]
      k = parentIndex
    }
    this.data[k] = temp
  }
  // 索引的值是否需要向下移动保持最大堆
  _shiftDown (k) {
    // 优化, 每次比较交换位置 -> 将初始值存储到临时变量中全部比较完成再将值赋给最后的位置
    let temp = this.data[k]
    // 子节点存在
    while (k * 2 <= this._count) {
      let j = k * 2
      // 左右子节点取最大值索引
      if (j + 1 <= this._count && this.data[j + 1] > this.data[j]) {
        j++
      }
      // 左右子节点最大值与当前值比较以确定是否需要交换
      if (temp >= this.data[j]) {
        break
      }
      this.data[k] = this.data[j]
      // swap[this.data, k, j]
      k = j
    }
    this.data[k] = temp
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
        layer += `${space}${this.data[j]}${space}`
      }
      tree += layer + '\n'
    }
    console.log(tree)
  }
}
// const arr = []
// for (let i = 0; i < 15; i++) {
//   arr.push(i)
// }
// const maxHeap = new MaxHeap(arr)
// maxHeap.print()
// maxHeap.extractMax()
// maxHeap.print()
module.exports = MaxHeap
