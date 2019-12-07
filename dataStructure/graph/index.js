const DenseGraph = require('./01-DenseGraph')
const SparseGraph = require('./02-SparseGraph')
const LazyPrimMST = require('./03-LazyPrimMST')
const PrimMST = require('./04-PrimMST')
const { readGraph } = require('./utils')

;(async function () {
  // const denseGraph = new DenseGraph(14, false)
  // await readGraph(denseGraph, 'testG1.txt')
  // denseGraph.show()
  // console.log('连通分量: ' + denseGraph.getComponentCount())
  // denseGraph.dfsPath(0, 4)
  // denseGraph.bfsPath(0, 4)
  const sparseGraph = new SparseGraph(8, false)
  await readGraph(sparseGraph, 'testG2.txt')
  // sparseGraph.show()
  // console.log('连通分量: ' + sparseGraph.getComponentCount())
  // sparseGraph.dfsPath(0, 5)
  // sparseGraph.bfsPath(0, 5)
  sparseGraph.show()
  // const lazyPrim = new LazyPrimMST(sparseGraph)
  // console.log(lazyPrim.weight())
  // console.log(lazyPrim.getEdges())
  const prim= new PrimMST(sparseGraph)
  console.log(prim.weight())
  console.log(prim.getEdges())
})()
