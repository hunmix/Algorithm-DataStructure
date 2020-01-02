/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  // 去掉所有/
  const arr = path.split('/')
  const stack = []
  // 遇到路径名时入栈, 遇到..时弹出顶部元素, 即返回上一级菜单
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    if (v !== '.' && v !== '..' && v !== '') {
      stack.push(v)
    } else if (v === '..') {
      stack.length > 0 && stack.pop()
    }
  }
  // 依次从头部取出路径
  let str = ''
  while (stack.length > 0) {
    str += `/${stack.shift()}`
  }
  return str ? str : '/'
};

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath('/a/../../b/../c//.//'))
console.log(simplifyPath('/a//b////c/d//././/..'))
console.log(simplifyPath('/../'))