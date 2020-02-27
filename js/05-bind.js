Function.prototype.myBind = function (context) {
  const args = Array.prototype.slice.call(arguments, 1)
  const fn = this
  let retFn = function () {
    return fn.apply(context, args.concat(...arguments))
  }
  return retFn
}

function test () {
  // this.a = 'test'
  console.log(this.a)
}

const a = {
  a: 'a'
}

const log = test.myBind(a)
console.log(new log())
log()

const log2 = test.bind(a)
console.log(new log2())
log2()