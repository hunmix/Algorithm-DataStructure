/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    let start = i
    let end = matrix.length - 1 - start
    for (let j = 0; j < end - start; j++) {
      const temp = matrix[start + j][start]
      matrix[start + j][start] = matrix[end][start + j]
      matrix[end][start + j] = matrix[end - j][end]
      matrix[end - j][end] = matrix[start][end - j]
      matrix[start][end - j] = temp
    }
  }
  return matrix
};
console.log(rotate(
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
))
console.log(rotate(
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ]
))