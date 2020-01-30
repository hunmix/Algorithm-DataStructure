/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  return dfs(n, 0)
};
const dfs = (n, index, cols = [], dia1 = [], dia2 = []) => {
  if (index === n) {
    return 1
  }
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (!cols[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
      cols[i] = true
      dia1[index + i] = true
      dia2[index - i + n - 1] = true
      sum += dfs(n, index + 1, cols, dia1, dia2)
      cols[i] = false
      dia1[index + i] = false
      dia2[index - i + n - 1] = false
    }
  }
  return sum
}

console.log(totalNQueens(4))
console.log(totalNQueens(8))