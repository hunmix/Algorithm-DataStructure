/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const ret = []
  _subsetsWithDup(nums.sort((a, b) => a - b), ret, 0)
  return ret
};

const _subsetsWithDup = (nums, ret, index, arr = [], used = []) => {
  ret.push([...arr])
  if (index === nums.length) {
    return
  }
  for (let i = index; i < nums.length; i++) {
    if (!used[i]) {
      if (i > index && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      arr.push(nums[i])
      used[i] = true
      _subsetsWithDup(nums, ret, i + 1, arr, used)
      arr.pop()
      used[i] = false
    }
  }
}

console.log(subsetsWithDup([1,2,2]))
console.log(subsetsWithDup([]))
console.log(subsetsWithDup([1, 2, 3]))