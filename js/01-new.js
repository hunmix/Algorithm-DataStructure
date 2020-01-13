// 浏览器环境下, 在全局下使用var声明的变量会自动绑定到window, node环境下则不会
// 箭头函数也是, gay的很
const newFn = function (fn, ...args) {
  if (typeof fn !== 'function') {
    throw new Error('first param must be a function')
  }
  const ret = Object.create(fn.prototype)
  const result = fn.apply(ret, args)
  if (typeof result === 'object' || typeof result === 'function') {
    return result
  }
  return ret
}
function People (name) {
  this.name = name
}
People.prototype.show = function () {
  console.log(this.name)
}

const people = newFn(People, 'newFn')
people.show()
const people2 = new People('new')
people2.show()