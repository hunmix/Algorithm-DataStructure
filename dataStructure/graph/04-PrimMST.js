const IndexMinHeap = require('./IndexMinHeap')

// 最小生成树
class PrimMST {
  constructor (graph) {
    this.graph = graph
    this.marked = [] // 顶点是否访问过
    this.pq = new IndexMinHeap() // 存储边
    this.mst = [] // 最小生成树的边
    this.minWeight = null

    this.visit(0)
    while (!this.pq.isEmpty()) {
      const edge = this.pq.extractMin()
      this.mst.push(edge)
      this.visit(edge.w())
    }

    for (let i = 0; i < this.mst.length; i++) {
      this.minWeight += this.mst[i].wt()
    }
    // console.log(this.minWeight)
  }
  visit (v) {
    if (this.marked[v]) {
      return
    }
    this.marked[v] = true
    const edges = this.graph.iteratorAdjcent(v)
    for (let i = 0; i < edges.length; i++) {
      const w = edges[i].w()
      if (!this.marked[w]) {
        const minWeight = this.pq.getItem(w) && this.pq.getItem(w).wt()
        // 端点已存在相连的边时只保留最短边, 其他边舍弃
        if (minWeight) {
          if (edges[i].wt() < minWeight) {
            this.pq.change(w, edges[i])
          }
        } else {
          // 将横切边加入优先队列
          this.pq.insert(w, edges[i])
        }
      }
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

module.exports = PrimMST
