const MinHeap = require('./MinHeap')
const UnionFind = require('../unionFind/01-UnionFindSets')
// 不断地加入新的不构成环路的最短边
class KruskalMST {
  constructor (graph) {
    this.graph = graph
    this.mst = []
    this.pq = new MinHeap()
    this.unionFind = new UnionFind(this.graph.getN()) // 并查集, 用于判断是否处连通
    this.minWeight = null

    const nodesLen = this.graph.getN()
    
    // 排序所有边, 并存入最小堆
    for (let i = 0; i < nodesLen; i++) {
      const edges = this.graph.iteratorAdjcent(i)
      // 由于是双向图, 只取v > w的边
      for (let j = 0; j < edges.length; j++) {
        if (edges[j].v() < edges[j].w()) {
          this.pq.insert(edges[j])
        }
      }
    }
    while (!this.pq.isEmpty() && this.mst.length < nodesLen - 1) {
      // 获取最小边
      const edge = this.pq.extractMin()
      // 判断是否相连
      if (this.unionFind.isconnected(edge.v(), edge.w())) {
        continue
      }
      this.mst.push(edge)
      this.unionFind.union(edge.v(), edge.w())
    }
    for (let i = 0; i < this.mst.length; i++) {
      this.minWeight += this.mst[i].wt()
    }
  }
  // 返回最小生成树的权值
  weight () {
    return this.minWeight
  }
  // 返回最小生成树所有边
  getEdges () {
    return this.mst
  }
}

module.exports = KruskalMST
