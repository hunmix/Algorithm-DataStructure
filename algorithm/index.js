const { generareRandomArray, testSort, generateNearlyOrderedArray } = require('../utils')
const selectionSort = require('./01-Selection-Sort')
const { insertionSort } = require('./02-Insertion-Sort')
const { mergeSort, mergeSortBottomUp} = require('./03-Merge-Sort')

const start = (n, rangeL, rangeR) => {
  const arr = generareRandomArray(n, rangeL, rangeR)
  const arr2 = [...arr]
  const arr3 = [...arr]
  const arr4 = [...arr]
  testSort('Selection Sort', selectionSort, arr)
  testSort('Insertion Sort', insertionSort, arr2)
  testSort('Merge Sort', mergeSort, arr3)
  testSort('Merge Sort Bottom Up', mergeSortBottomUp, arr4)
}

start(10000, 0, 10000)
