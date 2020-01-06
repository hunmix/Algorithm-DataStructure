/**
 * @param {string} s
 * @return {number}
 */
// 1
// var numDecodings = function(s) {
//   const memo = []
//   return _numDecodings(s, 0, memo)
// };
// const _numDecodings = (s, start, memo) => {
//   if (memo[start]) {
//     return memo[start]
//   }
//   if (s.length === start) {
//     return 1
//   }
//   if (s[start] === '0') {
//     return 0
//   }
//   let total = 0
//   total += _numDecodings(s, start + 1, memo)
//   if (start < s.length - 1 && Number(s.slice(start, start + 2)) <= 26 && s[start] !== '0') {
//     total += _numDecodings(s, start + 2, memo)
//   }
//   memo[start] = total
//   return total
// }
// 2
var numDecodings = function(s) {
  const dp = []
  for (let i = 0; i < s.length; i++) {
    
  }
};
console.log(numDecodings('2026'))