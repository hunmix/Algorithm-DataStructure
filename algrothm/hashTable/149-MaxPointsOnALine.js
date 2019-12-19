/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 0) {
    return 0
  }
  let max = 1
  for (let i = 0; i < points.length; i++) {
    const map = new Map()
    let sameNum = 0 // 重复的顶点数(i), 可算作任一直线的点 
    // 遍历和i点相关所有其他点, 计算直线方程存入map, 如果k的值和b的值相同说明在同一直线
    // 点的顺序不影响是否在一直线, 所以只需要计算points[i+1...points.length]和i的直线方程 
    for (let j = i + 1; j < points.length; j++) {
      let key
      // 遇到相同的点遍历map所有项+1
      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
        sameNum++
        continue
      // 处理y2 - y1等于零的情况
      } else if ((points[i][0] - points[j][0]) === 0) {
        key = `${points[i][0]}`
      } else {
        const y = points[i][1] - points[j][1]
        const x = points[i][0] - points[j][0]
        // 求最大公约数, 避免精度问题
        const g = gcb(y, x)
        const k = `${y / g}/${x / g}`
        const b = points[i][1] - k * points[i][0]
        key = `${k}#${b}`
      }
      if (map.has(key)) {
        map.set(key, map.get(key) + 1)
      } else {
        map.set(key, 1)
      }
    }
    // 寻找最大值并更新max, 计算时需要加上i点, 即 + 1
    for (let v of map.values()) {
      if (v + 1 + sameNum > max) {
        max = v + 1 + sameNum
      }
    }
    max = Math.max(max, sameNum + 1)
  }
  return max
};
// 求两个数的最大公约数
function gcb (a, b) {
  if (b === 0) {
    return a
  }
  return gcb(b, a % b)
}
console.log(maxPoints([[1,1],[2,2],[3,3]]))
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))
console.log(maxPoints([[0, 0]]))
console.log(maxPoints([[0,0],[1,1],[0,0]]))
console.log(maxPoints([[0,0],[0,0], [0, 0], [0, 0]]))
console.log(maxPoints([[0,0],[0,0]]))
console.log(maxPoints([[0,0],[94911151,94911150],[94911152,94911151]]))
