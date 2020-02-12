/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if (digits[i] - 10 < 0) {
      return digits
    }
    digits[i] = digits[i] % 10
  }
  digits.unshift(1)
  return digits
};

console.log(plusOne([1,2,3]))