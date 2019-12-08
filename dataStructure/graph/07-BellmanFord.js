class BellmanFord {
  constructor (graph, s) {
    this.start = s
    this.graph = graph
    this.distTo = []
    this.from = []
    this.hasNegativeCycle = null
    
    this.distTo[s] = 0
    this.from[s] = new Edge(s, s, 0)

    for (let i = 1; i < this.graph.getN(); i++) {
      for (let j = 0; j < this.graph.getN(); j++) {
        const edges = this.graph.iteratorAdjcent(j)
        for (let k = 0; k < edges.length; k++) {
          const edge = edges[k]
          if (this.from[edge.v()] !== undefined && (this.from[edge.w()] === undefined || this.distTo[edge.v()] + edge.wt() < this.distTo[edge.w()])) {
            this.distTo[edge.w()] = this.distTo[edge.v()] + edge.wt()
            this.from[edge.w()] = edge
          }
        }
      }
    }
    this.hasNegativeCycle = this._hasNegativeCycle()
  }
  // 返回图中是否有负权环
  negativeCycle () {
      return this.hasNegativeCycle
  }
  // 是否存在负权环
  _hasNegativeCycle () {
    for (let j = 0; j < this.graph.getN(); j++) {
      const edges = this.graph.iteratorAdjcent(j)
      for (let k = 0; k < edges.length; k++) {
        const edge = edges[k]
        if (this.from[edge.v()] !== undefined && (this.from[edge.w()] === undefined || this.distTo[edge.v()] + edge.wt() < this.distTo[edge.w()])) {
          return true
        }
      }
    }
    return false
  }
  shortestPathTo (w) {
    return this.distTo[w]
  }
  hasPathTo (w) {
    return this.marked[w]
  }
  // 寻找最短路径
  shortestPath (w) {
    if (this.hasNegativeCycle) {
      console.log('改图存在负权环, 最短路径不存在')
      return
    }
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

module.exports = BellmanFord
