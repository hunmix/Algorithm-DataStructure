/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 遇到左边部分一定是入栈操作, 否则判断是否出栈
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const val = stack[stack.length - 1]
    if (val && map[s[i]] === val) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
};
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('{[]}'))
console.log(isValid('([)]'))