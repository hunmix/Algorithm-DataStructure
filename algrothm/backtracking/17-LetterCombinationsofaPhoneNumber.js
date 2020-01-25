/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return []
  }
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const ret = []
  _letterCombinations(digits, map, 0, ret, '')
  return ret
};

const _letterCombinations = (digits, map, index, result, str = '') => {  
  if (index > digits.length - 1) {
    result.push(str)
    return
  }
  const letters = map[digits[index]]
  for (let i = 0; i < letters.length; i++) {
    _letterCombinations(digits, map, index + 1, result, str + letters[i])
  }
}

console.log(letterCombinations('23'))
console.log(letterCombinations(''))