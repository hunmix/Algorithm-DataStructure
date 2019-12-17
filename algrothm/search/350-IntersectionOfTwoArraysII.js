/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = {}
  const ret = []
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] === undefined) {
      map[nums1[i]] = 0
    }
    map[nums1[i]]++
  }
  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]]) {
      ret.push(nums2[j])
      map[nums2[j]]--
    }
  }
  return ret
};
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9,4,9,8,4]))