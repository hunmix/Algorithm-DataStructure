const fs = require('fs')
const readline = require('readline')
const path = require('path')

function readGraph (graph, filename) {
  let count = 0
  const n = graph.getN()
  return new Promise((resolve, reject) => {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(path.join(__dirname, filename))
    })
    lineReader.on('line', line => {
      const [v, w, weight] = line.split(' ')
      graph.addEdge(Number(v), Number(w), weight ? Number(weight) : 0)
      count++
    })
    lineReader.on('close', () => {
      // if (count !== n) {
      //   console.log(`number of nodes is not correct: execpt ${n}, but found ${count} in file ${filename}`)
      //   return
      // }
      resolve()
    })
  })
}

module.exports = {
  readGraph
}
