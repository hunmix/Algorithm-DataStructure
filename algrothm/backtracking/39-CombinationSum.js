/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const ret = []
  _combinationSum(candidates.sort((a, b) => a - b), 0, ret, target)
  return ret
};

const _combinationSum = (candidates, index, ret, total, arr = []) => {
  if (total === 0) {
    ret.push([...arr])
    return
  }
  for (let i = index; i < candidates.length; i++) {
    if (total - candidates[i] < 0) {
      break
    }
    arr.push(candidates[i])
    _combinationSum(candidates, i, ret, total - candidates[i], arr)
    arr.pop()
  }
}

// console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([8, 7, 4, 3], 11))