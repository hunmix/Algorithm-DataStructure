// 并查集
// 优化:
//   - union: 以树的形式存储, 避免执行union时需要O(n)复杂度
//   - 基于rank的优化: union时选择树的深度小的合并到大的, 保持树的最小深度
//   - 路径压缩: 
class UnionFindSets{
  constructor (n) {
    this.parent = new Array(n)
    this.rank = []
    this._count = n
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }
  // 查找
  find (p) {
    if (p < 0 || p > this._count) {
      return null
    }
    // 路径压缩1, 跳过一父节点进行合并
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }
    return p
    // 路径压缩, 将路径层数压缩至2(递归额外开销)
    // if (p !== this.parent[p]) {
    //   this.parent[p] = this.find(this.parent[p])
    // }
    // return this.parent[p]
  }
  // 判断是否关联
  isconnected (p, q) {
    return this.find(p) === this.find(q)
  }
  union (p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)
    if (pRoot === qRoot) {
      return
    }
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    } else if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      this.parent[pRoot] = qRoot
      this.rank[qRoot]++
    }
  }
}
function test (nums) {
  const unionFindSets = new UnionFindSets(nums)
  const start = Date.now()
  for (let i = 0; i < nums; i++) {
    const a = Math.floor(Math.random * nums)
    const b = Math.floor(Math.random * nums)
    unionFindSets.union(a, b)
  }
  for (let i = 0; i < nums; i++) {
    const a = Math.floor(Math.random * nums)
    const b = Math.floor(Math.random * nums)
    unionFindSets.isconnected(a, b)
  }
  const end = Date.now()
  console.log(`Union Find: ${(end - start) / 1000}s`)
}
test(10000)
module.exports = UnionFindSets
