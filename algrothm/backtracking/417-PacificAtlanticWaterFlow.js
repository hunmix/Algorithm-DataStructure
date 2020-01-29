/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (matrix.length <= 0) {
    return []
  }
  const pacific = []
  const atlantic = []
  const m = matrix.length
  const n = matrix[0].length
  const isInArea = (x, y) => x >= 0 && x < m && y >= 0 && y < n
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  matrix.forEach(() => {
    pacific.push([])
    atlantic.push([])
  })
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dfs(matrix, dirs, i, j, pacific, isInArea)
      }
      if (i === m - 1 || j === n - 1) {
        dfs(matrix, dirs, i, j, atlantic, isInArea)
      }
    }
  }
  const ret = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ret.push([i, j])
      }
    }
  }
  return ret
};

const dfs = (matrix, dirs, i, j, visited, isInArea) => {
  visited[i][j] = true
  for (let k = 0; k < dirs.length; k++) {
    const x = i + dirs[k][0]
    const y = j + dirs[k][1]
    if (isInArea(x, y) && !visited[x][y] && matrix[x][y] >= matrix[i][j]) {
      dfs(matrix, dirs, x, y, visited, isInArea)
    }
  }
}

console.log(pacificAtlantic(
  [
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
  ]
))
console.log(pacificAtlantic(
  [[1]]
))
console.log(pacificAtlantic(
  [
    [1,2],
    [4,3]
  ]
))
console.log(pacificAtlantic(
  [
    [1,2,3],
    [8,9,4],
    [7,6,5]
  ]
))