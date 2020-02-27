function curry(fn, args) {
  let length = fn.length
  args = args || []
  return function () {
    const newArgs = args.concat(Array.prototype.slice.call(arguments))
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

function multiFn(a, b, c) {
  console.log(a * b * c)
}

var multi = curry(multiFn)
const multi2 = multi(1)
multi2(4)
