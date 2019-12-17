/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = {}
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    if (!map[nums1[i]]) {
      map[nums1[i]] = true
    }
  }
  // (数组可以扔到另一个map里
  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]]) {
      res.push(nums2[j])
      map[nums2[j]] = false
    } 
  }
  return res
};
console.log(intersection([1,2,2,1], [2,2]))