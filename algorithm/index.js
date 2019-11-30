const { generareRandomArray, testSort, generateNearlyOrderedArray } = require('../utils')
const selectionSort = require('./01-Selection-Sort')
const insertionSort = require('./02-Insertion-Sort')
const mergeSort = require('./03-Merge-Sort')

const start = (n, rangeL, rangeR) => {
  const arr = generareRandomArray(n, rangeL, rangeR)
  const arr2 = [...arr]
  const arr3 = [...arr]
  testSort('Selection Sort', selectionSort, arr)
  testSort('Insertion Sort', insertionSort, arr2)
  testSort('Merge Sort', mergeSort, arr3)
}

start(50000, 0, 100000)
