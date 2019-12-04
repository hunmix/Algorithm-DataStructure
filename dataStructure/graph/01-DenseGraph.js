// 稠密图: 邻接矩阵实现
class DenseGraph {
  constructor (n, directed) {
    this.n = n // 点数
    this.m = 0 // 边数
    this.directed = directed // 是否有向图
    this.g = []
    this.id = []
    this._visited = [] // 访问过的变量
    this._from = [] // 遍历时从何处来的
    this._order = [] // 离初始点的距离
    for (let i = 0; i < n; i ++) {
      this.g.push(new Array(n).fill(false))
    }
  }
  // 增加边
  addEdge (v, w) {
    if (v < 0 || v > this.n || w < 0 || w > this.n) {
      console.error('out of range')
      return
    }
    if (this.hasEdge(v, w)) {
      return
    }
    this.g[v][w] = true
    if (v !== w && !this.directed) {
      this.g[w][v] = true
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
  // s -> d 路径, 深度优先遍历
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
        if (!this._visited[edges[i]]) {
          this._visited[edges[i]] = true
          this._from[edges[i]] = v
          this._order[edges[i]] = this._order[v] + 1
          queue.push(edges[i])
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
  // 获取最短路径长度
  // getLength (s) {
  //   this._order[s]
  // }
  // 深度优先遍历
  _dfs (v) {
    this._visited[v] = true
    const edges = this.iteratorAdjcent(v)
    for (let i = 0; i < edges.length; i++) {
      if (!this._visited[edges[i]]) {
        this._from[edges[i]] = v
        this._dfs(edges[i])
      }
    }
  }
  // 获取邻边
  iteratorAdjcent (v) {
    if (v < 0 || v > this.n) {
      console.error('out of range')
      return
    }
    let arr = []
    for (let i = 0; i < this.g[v].length; i++) {
      if (this.g[v][i]) {
        arr.push(i)
      }
    }
    return arr
  }
  show () {
    console.log('Dense Graph:')
    for (let i = 0; i < this.n; i++) {
      let str = ``
      for (let j = 0; j < this.g[i].length; j++) {
        str += `${this.g[i][j] ? 1 : 0}  `
      }
      console.log(str)
    }
  }
  // 边是否存在
  hasEdge (v, w) {
    if (v < 0 || v > this.n || w < 0 || w > this.n) {
      console.error('out of range')
      return
    }
    return this.g[v][w]
  }
  // 获取顶点数
  getN () {
    return this.n
  }
  
}

module.exports = DenseGraph
