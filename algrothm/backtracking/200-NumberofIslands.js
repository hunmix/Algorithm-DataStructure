/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length <= 0) {
    return 0
  }
  const visited = []
  for (let i = 0; i < grid.length; i++) {
    visited.push([])
  }
  const isInArea = makeIsInArea(grid)
  const len = grid[0].length
  let count = 0
  const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        count++
        _numIslands(grid, visited, i, j, dir, isInArea)
      }
    }
  }
  return count
};

const _numIslands = (grid, visited, i, j, dir, isInArea) => {
  visited[i][j] = true
  for (let k = 0; k < dir.length; k++) {
    const pos1 = i + dir[k][0]
    const pos2 = j + dir[k][1]
    if (!isInArea(pos1, pos2) || visited[pos1][pos2] || grid[pos1][pos2] === '0') {
      continue
    }
    _numIslands(grid, visited, pos1, pos2, dir, isInArea)
  }
}

const makeIsInArea = (grid) => {
  const x = grid.length
  const y = grid[0].length
  return (posX, posY) => {
    return  posX >= 0 && posX < x && posY < y && posY >= 0
  }
}

console.log(numIslands(
  [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
))
console.log(numIslands(
  [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ]
))