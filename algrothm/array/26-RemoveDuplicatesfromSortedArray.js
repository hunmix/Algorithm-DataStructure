/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let prev = 0
  let cur = 1
  while (cur < nums.length) {
    if (nums[cur] !== nums[prev]) {
      nums[++prev] = nums[cur]
    }
    cur++
  }
  return prev + 1
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))