/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const graph = {}
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
  console.log(graph)
};

console.log(ladderLength('hit', 'hog', ["hot","dot","dog","lot","log","cog"]))