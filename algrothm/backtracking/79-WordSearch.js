/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const used = []
  for (let i = 0; i < board.length; i++) {
    used.push([])
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (_exist(board, word, 0, used, i, j)) {
        return true
      }
    }
  }
  return false
};

const _exist = (board, word, index, used, y, x) => {
  const cur = word[index]
  if (!board[y] || !board[y][x] || board[y][x] !== cur || used[y][x]) {
    return false
  }
  if (index === word.length - 1) {
    return word[index] === board[y][x]
  }
  used[y][x] = true
  if (_exist(board, word, index + 1, used, y - 1, x)) return true
  if (_exist(board, word, index + 1, used, y, x - 1)) return true
  if (_exist(board, word, index + 1, used, y + 1, x)) return true
  if (_exist(board, word, index + 1, used, y, x + 1)) return true
  used[y][x] = false
  return false
}

console.log(exist(
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],
  'ABCCED'
))
console.log(exist(
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],
  'SEE'
))
console.log(exist(
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],
  'ABCB'
))
console.log(exist(
  [["a","b"],["c","d"]],
  'acdb'
))