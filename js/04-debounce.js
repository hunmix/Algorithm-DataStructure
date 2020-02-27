function debounce (fn, wait) {
  let timer = null
  return function () {
    const args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

const log = debounce(() => console.log(1), 1000)
setInterval(() => {
  log()
}, 2000)