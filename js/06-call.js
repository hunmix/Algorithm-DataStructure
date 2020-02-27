Function.prototype.call2 = function (context, ...args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

const obj = {
  a: 'a'
}

function test (name, value) {
  console.log(this.a)
  console.log(name)
  console.log(value)
}

test.call(obj, 'name', 'value')