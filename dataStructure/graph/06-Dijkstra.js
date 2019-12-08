const IndexMinHeap = require('../heap/05-IndexMinHeap')
// 最短路径
class Dijkstra {
  constructor (graph, v) {
    this.start = v
    this.graph = graph
    this.pq = new IndexMinHeap()
    this.distTo = [] // 到顶点最短路径的距离
    this.marked = [] // 已访问过的顶点
    this.from = [] // 从哪个顶点过来的
    
    // 初始化
    this.distTo[v] = 0
    this.marked[v] = true
    this.from[v] = new Edge(v, v, 0)
    this.pq.insert(v, this.distTo[v])

    while(!this.pq.isEmpty()) {
      const v = this.pq.extractMinIndex()

      this.marked[v] = true
      const edges = this.graph.iteratorAdjcent(v)
      for (let i = 0; i < edges.length; i++) {
        const w = edges[i].w()
        // 最短路径还没有找到
        if (!this.marked[w]) {
          // Relaxation 松弛操作
          // 未访问过或有更短路径
          if (this.from[w] === undefined || this.distTo[v] + edges[i].wt() < this.distTo[w]) {
            this.distTo[w] = this.distTo[v] + edges[i].wt()
            this.from[w] = edges[i]
            if (this.pq.isContain(w)) {
              this.pq.change(w, this.distTo[w])
            } else {
              this.pq.insert(w, this.distTo[w])
            }
          }
        }
      }
    }
  }
  shortestPathTo (w) {
    return this.distTo[w]
  }
  hasPathTo (w) {
    return this.marked[w]
  }
  // 寻找最短路径
  shortestPath (w) {
    let q = []
    let edge = this.from[w]
    while (edge.v() !== this.start) {
      q.push(edge)
      edge = this.from[edge.v()]
    }
    q.push(edge)
    let result = `${this.start}`
    while (q.length > 0) {
      result += ` -> ${q.pop().w()}`
    }
    console.log(`shortest path ${this.start} to ${w} :`)
    console.log(result)
  }
}
class Edge {
  constructor (a, b, weight) {
    this.a = a
    this.b = b
    this.weight = weight
  }
  v () {
    return this.a
  }
  w () {
    return this.b
  }
  wt () {
    return this.weight
  }
  other (a) {
    if (a !== this.a || a !== this.b) {

    }
    return a === this.a ? this.b : this.a
  }
}
module.exports = Dijkstra
