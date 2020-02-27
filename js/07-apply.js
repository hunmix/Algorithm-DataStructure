Function.prototype.apply2 = function (context, arr) {
  const fn = this
  context.fn = fn
  let res
  if (arguments[1]) {
    res = context.fn(...arguments[1])
  } else {
    res = context.fn()
  }
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

test.apply2(obj, ['name', 'value'])