const { generareRandomArray, testSort, generateNearlyOrderedArray } = require('../utils')
const { bubbleSort } = require('./00-BubbleSort')
const selectionSort = require('./01-SelectionSort')
const { insertionSort } = require('./02-InsertionSort')
const { mergeSort, mergeSortBottomUp} = require('./03-MergeSort')
const { quickSort } = require('./04-QuickSort')
const { quickSort2 } = require('./05-QuickSort2')
const { quickSort3Ways } = require('./06-QuickSort3')
const { heapSort } = require('./07-HeapSort')
const { heapSort2 } = require('./08-HeapSort2')
const { shellSort } = require('./09-ShellSort')
const { countSort } = require('./10-CountSort')

const start = (n, rangeL, rangeR) => {
  const arr = generareRandomArray(n, rangeL, rangeR)
  // const arr = generateNearlyOrderedArray(100000, 100)
  const arr1 = [...arr]
  const arr2 = [...arr]
  const arr3 = [...arr]
  const arr4 = [...arr]
  const arr5 = [...arr]
  const arr6 = [...arr]
  const arr7 = [...arr]
  const arr8 = [...arr]
  const arr9 = [...arr]
  const arr10 = [...arr]
  const arr11 = [...arr]
  // testSort('Bubble Sort', bubbleSort, arr1)
  // testSort('Selection Sort', selectionSort, arr)
  // testSort('Insertion Sort', insertionSort, arr2)
  testSort('Merge Sort', mergeSort, arr3)
  // testSort('Merge Sort Bottom Up', mergeSortBottomUp, arr4)
  testSort('Quick Sort', quickSort, arr5)
  // testSort('Quick Sort 2', quickSort2, arr6)
  // testSort('Quick Sort 3 Ways', quickSort3Ways, arr7)
  // testSort('Heap Sort', heapSort, arr8)
  // testSort('Heap Sort 2', heapSort2, arr9)
  testSort('Shell Sort', shellSort, arr10)
  testSort('Count Sort', shellSort, arr11)
}

start(100000, 0, 10000)
