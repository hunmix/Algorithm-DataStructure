/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length <= 0) {
    return []
  }
  const ret = []
  _subsets(nums.sort((a, b) => a - b), ret, 0)
  return ret
};

const _subsets = (nums, ret, index, arr = [], used = []) => {
  ret.push([...arr])
  if (index >= nums.length) {
    return
  }
  for (let i = index; i < nums.length; i++) {
    if (!used[i]) {
      arr.push(nums[i])
      used[i] = true
      _subsets(nums, ret, i + 1, arr, used)
      arr.pop()
      used[i] = false
    }
  }
}

console.log(subsets([1,2,3]))