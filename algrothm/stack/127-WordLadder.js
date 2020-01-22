/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0
  }
  // 邻接表
  const graph = {}
  wordList.push(beginWord)
  // 创建邻接表
  for (let i = 0; i < wordList.length; i++) {
    graph[wordList[i]] = []
    for (let j = 0; j < wordList.length; j++) {
      if (j !== i && wordList[j].length === wordList[i].length) {
        let count = 0
        for (let k = 0; k < wordList[i].length; k++) {
          if (wordList[i][k] !== wordList[j][k]) {
            count++
            if (count > 1) {
              break
            }
          }
        }
        count <= 1 && graph[wordList[i]].push(wordList[j])
      }
    }
  }
  // bfs
  const queue = [[beginWord, 1]]
  const visited = new Map()
  while (queue.length > 0) {
    const [node, level] = queue.shift()
    const arr = graph[node]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === endWord) {
        return level + 1
      }
      if (!visited.has(arr[i])) {
        queue.push([arr[i], level + 1])
        visited.set(arr[i], true)
      }
    }
  }
  return 0
};

console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']))
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log']))
console.log(ladderLength('hot', 'dog', ['hot','dog']))