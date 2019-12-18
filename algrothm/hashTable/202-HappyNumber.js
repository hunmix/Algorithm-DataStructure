/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = {}
  let num = n
  let next = 0
  while (num !== 1) {
    next = 0
    // 计算每位数字的平方和
    for (let i = 0; i < String(num).length; i++) {
      const num2 = Math.floor(num * 10 / (10 ** (i + 1)) % 10)
      next += num2 ** 2
    }
    num = next
    // 如果数字已经存在过了说明存在循环 返回false
    if (map[num]) {
      return false
    }
    map[next] = true
  }
  return true
};
console.log(isHappy(19))
