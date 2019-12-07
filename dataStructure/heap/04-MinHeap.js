// 最小二叉堆
class MinHeap {
  constructor (arr = []) {
    this.data = []
    this._count = 0
    this._heapify(arr)
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
      if (j + 1 < this._count && this.data[j + 1] < this.data[j] ) {
        j += 1
      }
      if (temp < this.data[j]) {
        break
      }
      this.data[k] = this.data[j]
      k = j
    }
    this.data[k] = temp
  }
  _shiftUp (k) {
    const temp = this.data[k]
    while (k > 0 && temp < this.data[Math.floor((k - 1) / 2)]) {
      this.data[k] = this.data[Math.floor((k - 1) / 2)]
      k = Math.floor((k - 1) / 2)
    }
    this.data[k] = temp
  }
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
      for (let j = Math.pow(2, i) - 1; j <= this._count - 1 && j < 2 * Math.pow(2, i) - 1; j++) {
        layer += `${space}${this.data[j]}${space}`
      }
      tree += layer + '\n'
    }
    console.log(tree)
  }
}
// const arr = []
// for (let i = 3; i > 0; i--) {
//   arr.push(i)
// }
// const maxHeap = new MinHeap(arr)
// maxHeap.insert(0)
// maxHeap.print()
// console.log(maxHeap.extractMin())
// maxHeap.print()
// maxHeap.extractMin()
// maxHeap.print()

module.exports = MinHeap
