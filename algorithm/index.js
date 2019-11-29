const { generareRandomArray, testSort, generateNearlyOrderedArray } = require('../utils')
const selectionSort = require('./01-Selection-Sort')
const insertionSort = require('./02-Insertion-Sort')

const start = (n, swapTimes) => {
  const arr = generateNearlyOrderedArray(n, swapTimes)
  const arr2 = [...arr]
  testSort('Selection Sort', selectionSort, arr)
  testSort('Insertion Sort', insertionSort, arr2)
}

start(10000, 100)
