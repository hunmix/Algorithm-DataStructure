const MinHeap = require('./MinHeap')

// 最小生成树
class LazyPrimMST {
  constructor (graph) {
    this.graph = graph
    this.marked = [] // 顶点是否访问过
    this.pq = new MinHeap() // 存储边
    this.mst = [] // 最小生成树的边
    this.minWeight = null

    this.visit(0)
    while (!this.pq.isEmpty()) {
      const edge = this.pq.extractMin()
      // 如果两个点处于同一区域, 丢弃
      if (this.marked[edge.v()] === this.marked[edge.w()]) {
        continue
      }
      this.mst.push(edge)
      if (!this.marked[edge.w()]) {
        this.visit(edge.w())
      } else {
        this.visit(edge.v())
      }
    }

    for (let i = 0; i < this.mst.length; i++) {
      this.minWeight += this.mst[i].wt()
    }
    // console.log(this.minWeight)
  }
  visit (v) {
    // console.log(v)
    if (this.marked[v]) {
      return
    }
    this.marked[v] = true
    const edges = this.graph.iteratorAdjcent(v)
    for (let i = 0; i < edges.length; i++) {
      if (!this.marked[edges[i].w()]) {
        // console.log(edges[i].wt())
        this.pq.insert(edges[i])
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

module.exports = LazyPrimMST
