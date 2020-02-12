/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let p = 0
  let q = 0
  const ret = []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  while (p < nums1.length && q < nums2.length) {
    const valP = nums1[p]
    const valQ = nums2[q]
    if (valP === valQ) {
      ret.push(valP)
      p++
      q++
    } else if (valP < valQ) {
      p++
    } else {
      q++
    }
  }
  return ret
};

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))