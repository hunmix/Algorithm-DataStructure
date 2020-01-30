/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const n = 9
  const cells = [] // 3 * 3格子
  const cols = [] // 竖直方向
  const rows = [] // 横
  for (let i = 0; i < 3; i++) {
    cells.push([])
    for (let j = 0; j < 3; j++) {
      cells[i].push([])
    }
  }
  for (let i = 0; i <= n; i++) {
    cols.push([])
    rows.push([])
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== '.') {
        rows[i][board[i][j]] = true
        cols[j][board[i][j]] = true
        cells[Math.floor(i / 3)][Math.floor(j / 3)][board[i][j]] = true
      }
    }
  }
  dfs(board, n, 0, 0, cells, cols, rows)
  return board
};

const dfs = (board, n, x, y, cells, cols, rows) => {
  if (y > n - 1) {
    x++
    y = 0
    if (x === n) {
      return true
    }
  }
  if (board[x][y] !== '.') {
    return dfs(board, n, x, y + 1, cells, cols, rows)
  }
  for (let k = 1; k <= n; k++) {
    if (!rows[x][k] && !cols[y][k] && !cells[Math.floor(x / 3)][Math.floor(y / 3)][k]) {
      board[x][y] = `${k}`
      rows[x][k] = true
      cols[y][k] = true
      cells[Math.floor(x / 3)][Math.floor(y / 3)][k] = true
      if (dfs(board, n, x, y + 1, cells, cols, rows)) {
        return true
      }
      board[x][y] = '.'
      rows[x][k] = false
      cols[y][k] = false
      cells[Math.floor(x / 3)][Math.floor(y / 3)][k] = false
    }
  }
  return false
}

console.log(solveSudoku(
  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
))