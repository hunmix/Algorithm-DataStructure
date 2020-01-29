/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const ret = []
  cols = [] // 竖方向是否冲突
  dia1 = [] // 左下 -> 右上是否冲突
  dia2 = [] // 右上 -> 左下是否冲突
  dfs(n, 0, ret, cols, dia1, dia2)
  return ret
};

const dfs = (n, index, ret, cols, dia1, dia2, res = []) => {
  if (index === n) {
    ret.push(generateBoard(res, n))
    return
  }
  for (let i = 0; i < n; i++) {
    if (!cols[i] && !dia1[i + index] && !dia2[index - i + n - 1]) {
      cols[i] = true
      dia1[index + i] = true
      dia2[index - i + n - 1] = true
      res.push(i)
      dfs(n, index + 1, ret, cols, dia1, dia2, res)
      res.pop()
      cols[i] = false
      dia1[index + i] = false
      dia2[index - i + n - 1] = false
    }
  }
}

const generateBoard = (res, n) => {
  const ret = []
  for (let i = 0; i < n; i++) {
    let row = ''
    res.forEach((v) => {
      row += i === v ? 'Q' : '.'
    })
    ret.push(row)
  }
  return ret
}

console.log(solveNQueens(4))
console.log(solveNQueens(8))