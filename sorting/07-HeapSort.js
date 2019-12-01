const MaxHeap = require('../dataStructure/heap/01-MaxHeap')

function heapSort (arr) {
  const heapMap = new MaxHeap(arr)
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = heapMap.extractMax()
  }
}

module.exports = {
  heapSort
}