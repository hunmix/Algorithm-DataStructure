const { generareRandomArray, testSort, generateNearlyOrderedArray } = require('../utils')
const selectionSort = require('./01-Selection-Sort')
const { insertionSort } = require('./02-Insertion-Sort')
const { mergeSort, mergeSortBottomUp} = require('./03-Merge-Sort')
const { quickSort } = require('./04-QuickSort')
const { quickSort2 } = require('./05-QuickSort2')
const { quickSort3Ways } = require('./06-QuickSort3')

const start = (n, rangeL, rangeR) => {
  const arr = generareRandomArray(n, rangeL, rangeR)
  // const arr = generateNearlyOrderedArray(100000, 100)
  const arr2 = [...arr]
  const arr3 = [...arr]
  const arr4 = [...arr]
  const arr5 = [...arr]
  const arr6 = [...arr]
  const arr7 = [...arr]
  // testSort('Selection Sort', selectionSort, arr)
  // testSort('Insertion Sort', insertionSort, arr2)
  // testSort('Merge Sort', mergeSort, arr3)
  // testSort('Merge Sort Bottom Up', mergeSortBottomUp, arr4)
  // testSort('Quick Sort', quickSort, arr5)
  testSort('Quick Sort 2', quickSort2, arr6)
  testSort('Quick Sort 3 Ways', quickSort3Ways, arr7)
}

start(1000000, 0, 10)
