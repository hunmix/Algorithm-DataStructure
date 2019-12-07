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
// 稠密图: 邻接表实现
class SparseGraph {
  constructor (n, directed) {
    this.n = n // 点数
    this.m = 0 // 边数
    this.directed = directed
    this.g = []
    this._from = []
    this._visited = [] // 记录访问过的节点
    for (let i = 0; i < n; i++) {
      this.g.push([])
    }
  }
  addEdge (v, w, weight) {
    if (v < 0 || v > this.n || w < 0 || w > this.n) {
      console.error('out of range')
      return
    }
    if (this.hasEdge(v, w)) {
      return
    }
    this.g[v].push(new Edge(v, w, weight))
    if (v !== w && !this.directed) {
      this.g[w].push(new Edge(w, v, weight))
    }
    this.m++
  }
  // 求连通分量
  getComponentCount () {
    this._visited = []
    let count = 0
    for (let i = 0; i < this.n; i++) {
      if (!this._visited[i]) {
        this._dfs(i)
        count++
      }
    }
    return count
  }
  // s -> d 路径
  dfsPath (s, d) {
    this._visited = []
    this._from = []
    this._dfs(s)
    let p = d
    const arr = []
    while (this._from[p] !== undefined) {
      arr.push(p)
      p = this._from[p]
    }
    let str = `${s}`
    for (let i = arr.length - 1; i >= 0; i--) {
      str += ` -> ${arr[i]}`
    }
    console.log(str)
  }
  // s -> d 路径, 广度优先遍历
  bfsPath (s, d) {
    if (s < 0 || s > this.n || d < 0 || d > this.n) {
      console.error('out of range')
      return
    }
    this._visited = []
    this._from = []
    this._order = []
    this._visited[s] = true
    this._order[s] = 0
    const queue = [s]
    while (queue.length > 0) {
      const v = queue.shift()
      const edges = this.iteratorAdjcent(v)
      for (let i = 0; i < edges.length; i++) {
        const w = edges[i].w()
        if (!this._visited[w]) {
          this._visited[w] = true
          this._from[w] = v
          this._order[w] = this._order[v] + 1
          queue.push(w)
        }
      }
    }
    const arr = []
    let p = d
    while (this._from[p] !== undefined) {
      arr.push(p)
      p = this._from[p]
    }
    let str = `${s}`
    while (arr.length > 0) {
      str += ` -> ${arr.pop()}`
    }
    console.log(str)
  }
  _dfs (v) {
    this._visited[v] = true
    const edges = this.iteratorAdjcent(v)
    for (let i = 0; i < edges.length; i++) {
      if (!this._visited[edges[i].w()]) {
        this._from[edges[i].w()] = v
        this._dfs(edges[i].w())
      }
    }
  }
  // 获取邻边
  iteratorAdjcent (v) {
    if (v < 0 || v > this.n) {
      console.error('out of range')
      return
    }
    return this.g[v]
  }
  show () {
    console.log('Sparse Graph:')
    for (let i = 0; i < this.n; i++) {
      let str = `${i}: `
      for (let j = 0; j < this.g[i].length; j++) {
        str += `( to: ${this.g[i][j].w()}, weight: ${this.g[i][j].wt()} )`
      }
      console.log(str)
    }
  }
  hasEdge (v, w) {
    if (v < 0 || v > this.n || w < 0 || w > this.n) {
      console.error('out of range')
      return
    }
    for (let i = 0; i < this.g[v].length; i++) {
      if (this.g[v][i].w() === w) {
        return true
      } else {
        return false
      }
    }
  }
  // 获取顶点数
  getN () {
    return this.n
  }
}

module.exports = SparseGraph
