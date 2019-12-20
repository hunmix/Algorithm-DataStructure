/**
 * @param {number[][]} points
 * @return {number}
 */
// O(n²)
var numberOfBoomerangs = function(points) {
  let ret = 0
  // 以顶点i为中间点, 计算各点到i的距离并存入map, 距离相同的点的组合即是答案
  for (let i = 0; i < points.length; i++) {
    const map = new Map()
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        // 点之间的距离 
        const dis = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
        // 到i点距离相同的点存入map
        if (map.has(dis)) {
          map.set(dis, map.get(dis) + 1)
        } else {
          map.set(dis, 1)
        }
      }
    }
    // 遍历map中距离相同的点, 并计算可能的个数
    for (let val of map.values()) {
      if (val >= 2) {
        ret += val * (val - 1)
      }
    }
  }
  return ret
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))