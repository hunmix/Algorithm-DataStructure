/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length <= 0) {
    return []
  }
  const ret = []
  _permute(nums, 0, ret, [], [])
  return ret
};

const _permute = (nums, index, result, arr, usedArr) => {
  if (index === nums.length) {
    result.push([...arr])
  }
  for (let i = 0; i < nums.length; i++) {
    if (!usedArr[i]) {
      arr.push(nums[i])
      usedArr[i] = true
      _permute(nums, index + 1, result, arr, usedArr)
      arr.pop()
      usedArr[i] = false
    }
  }
}

console.log(permute([1, 2, 3]))
console.log(permute([]))