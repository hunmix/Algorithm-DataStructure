/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ret = []
  _combinationSum2(candidates.sort((a, b) => a - b), target, ret, 0)
  return ret
};

const _combinationSum2 = (candidates, target, ret, index, arr = [], sum = 0, used = []) => {
  if (sum === target) {
    ret.push([...arr])
    return
  }
  // 移到for中进行判断, 少一次递归
  // if (sum > target) {
  //   return
  // }
  for (let i = index; i < candidates.length; i++) {
    // 若和比target大, 则直接跳过
    if (candidates[i] + sum > target) {
      continue
    }
    if (!used[i]) {
      // 防止重复计算
      if (i > 0 && !used[i - 1] && candidates[i] === candidates[i - 1]) {
        continue
      }
      arr.push(candidates[i])
      used[i] = true
      _combinationSum2(candidates, target, ret, i + 1, arr, sum + candidates[i], used)
      arr.pop()
      used[i] = false
    }
  }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8))