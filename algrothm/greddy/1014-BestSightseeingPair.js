/**
 * @param {number[]} A
 * @return {number}
 */
// A[i] + A[j] + i - j
// A[i] + i, A[j] - j
var maxScoreSightseeingPair = function(A) {
  let max1 = A[0]
  let res = 0
  for (let j = 1; j < A.length; j++) {
    const max2 = A[j] - j
    if (max1 + max2 > res) {
      res = max1 + max2
    }
    if (A[j] + j > max1) {
      max1 = A[j] + j
    }
  }
  return res
};

console.log(maxScoreSightseeingPair([8,1,5,2,6]))
console.log(maxScoreSightseeingPair([1,3,5]))