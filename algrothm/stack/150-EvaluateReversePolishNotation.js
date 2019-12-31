/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const s = []
  const map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  }
  // 遇到符号弹出栈顶两个元素计算并把结果压入栈中
  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      const b = s.pop()
      const a = s.pop()
      s.push(map[tokens[i]](a, b))
    } else {
      s.push(Number(tokens[i]))
    }
  }
  return s[0]
};
// function calc (operator, num1, num2) {
//   let ret = null
//   switch (operator) {
//     case '+':
//       ret = num1 + num2
//       break;
//     case '-':
//       ret = num1 - num2
//       break;
//     case '*':
//       ret = num1 * num2
//       break;
//     case '/':
//       // 这里用floor负分数取值为-1, 不符合期望
//       // 取整
//       ret = Math.trunc(num1 / num2)
//       break;
//   }
//   return ret
// }
console.log(evalRPN(['2', '1', '+', '3', '*']))
console.log(evalRPN(['4', '13', '5', '/', '+']))
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))