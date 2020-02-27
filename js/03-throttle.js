function throttle (fn, wait) {
  let prev = Date.now()
  return function () {
    const args = arguments
    const now = Date.now()
    if (now - prev > wait) {
      fn.apply(this, args)
      prev = Date.now()
    }
  }
}
const log = throttle(() => console.log(1), 1000)
setInterval(() => {
  log()
}, 100)