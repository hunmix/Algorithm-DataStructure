/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 寻找不在border的O(超时) -> 标记所有在border的O
var solve = function(board) {
  if (board.length <= 0) {
    return board
  }
  const visited = []
  for (let i = 0; i < board.length; i++) {
    visited.push([])
  }
  const m = board.length
  const n = board[0].length
  const isInArea = (x, y) => {
    return x < m && x >= 0 && y >= 0 && y < n
  }
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  // 搜索靠边的岛屿并标记
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if((i === 0 || j === 0 || i === m - 1 || j === n - 1) && board[i][j] == 'O'){
        dfs(board, visited, i, j, isInArea, dir)
      }
    }
  }
  // 除了被标记的岛屿O都改成X
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!visited[i][j] && board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
  return board
};

const dfs = (board, visited, i, j, isInArea, dir) => {
  visited[i][j] = true
  for (let k = 0; k < dir.length; k++) {
    const pos1 = i + dir[k][0]
    const pos2 = j + dir[k][1]
    if (isInArea(pos1, pos2) && !visited[pos1][pos2] && board[pos1][pos2] === 'O') {
      dfs(board, visited, pos1, pos2, isInArea, dir)
    }
  }
}

console.log(solve(
  [
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
  ]
))
console.log(solve(
  [
    ["X","O","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
  ]
))
console.log(solve(
  [
    ["O","O","O","O"],
    ["O","O","O","O"],
    ["O","O","O","O"],
    ["O","O","O","O"]
  ]
))
console.log(solve(
  [
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"],
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"]
  ]
))