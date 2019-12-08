// 最小索引堆
class IndexMinHeap {
  constructor (arr = []) {
    this.data = []
    this._indexes = []
    this._count = 0
    this._heapify(arr)
  }
  // 获取最小值
  extractMin () {
    const min = this.data[this._indexes[0]]
    this._indexes[0] = this._indexes[--this._count]
    this._shiftDown(0)
    return min
  }
  extractMinIndex () {
    const minIndex = this._indexes[0]
    this._indexes[0] = this._indexes[--this._count]
    this._shiftDown(0)
    return minIndex
  }
  insert (i, v) {
    this.data[i] = v
    this._indexes[this._count] = i
    this._shiftUp(this._count)
    this._count++
  }
  // 获取最大索引堆中索引为i的元素
  getItem (i) {
    if (i < 0) {
      console.log('index must gt 0')
      return
    }
    return this.data[i]
  }
  // 将索引堆中索引为i的元素改为v
  change (i, v) {
    this.data[i] = v
    for (let j = 0; j < this._count; j++) {
      if (this._indexes[j] === i) {
        this._shiftUp(j)
        this._shiftDown(j)
      }
    }
  }
  isContain (v) {
    return this._indexes.find(i => i === v)
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
    const temp = this._indexes[k]
    while (k * 2 + 1 < this._count) {
      let j = k * 2 + 1
      // 获取子节点数值较小的节点
      if (j + 1 < this._count && this.data[this._indexes[j + 1]] < this.data[this._indexes[j]] ) {
        j += 1
      }
      if (this.data[temp] < this.data[this._indexes[j]]) {
        break
      }
      this._indexes[k] = this._indexes[j]
      k = j
    }
    this._indexes[k] = temp
  }
  _shiftUp (k) {
    const temp = this._indexes[k]
    while (k > 0 && this.data[temp] < this.data[this._indexes[Math.floor((k - 1) / 2)]]) {
      this._indexes[k] = this._indexes[Math.floor((k - 1) / 2)]
      k = Math.floor((k - 1) / 2)
    }
    this._indexes[k] = temp
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
        layer += `${space}${this.data[this._indexes[j]]}${space}`
      }
      tree += layer + '\n'
    }
    console.log(tree)
  }
}

module.exports = IndexMinHeap
