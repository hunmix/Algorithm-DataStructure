// new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve(1)
//   }, 500)
// }).then(res => {
//   console.log(res)
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve(2)
//       }, 500)
//   })
// }).then(res => {
//   console.log(res)
// })

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor (executor) {
    this.value = ''
    this.reason = ''
    this.status = PENDING
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    const resolve = (value) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = FULFILLED
          this.fulfilledCallbacks.map(cb => {
            this.value = cb(value)
          })
        }
      }, 0)
    }
  
    const reject = (value) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = REJECTED
          this.rejectedCallbacks.map(cb => {
            this.reason = cb(value)
          })
        }
      }, 0)
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  
  then (onFulfilled, onRejected) {
    typeof onFulfilled === 'function' && function (value) { return value }
    typeof onRejected === 'function' && function (reason) { throw reason }
    if (this.status === FULFILLED) {
      return new Promise((resolve, reject) => {
        const x = onFulfilled(this.value)
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      })   
    }
    if (this.status === REJECTED) {
      return new Promise((resolve, reject) => {
        const x = onRejected(this.reason)
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      })
    }
    if (this.status === PENDING) {
      return new Promise((resolve, reject) => {
        this.fulfilledCallbacks.push(value => {
          try {
            const x = onFulfilled(value)
            if (x instanceof MyPromise) {
              x.then(resolve, reject)
            }
          } catch (error) {
            reject(reject)
          }
        })
        this.rejectedCallbacks.push(v => {
          try {
            const x = onRejected(value)
            if (x instanceof MyPromise) {
              x.then(resolve, reject)
            }
          } catch (error) {
            reject(reject)
          }
        })
      })
    }
  }
}


new MyPromise((resolve, reject) => {
  setTimeout(() => {
      resolve(1)
  }, 500)
}).then(res => {
  console.log(res)
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 500)
  })
}).then(res => {
  console.log(res)
}).then(res => {
  console.log(res)
})
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve(1)
//   }, 500)
// }).then(res => {
//   console.log(res)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2)
//     }, 500)
//   })
// }).then(res => {
//   console.log(res)
// }).then(res => {
//   console.log(res)
// })

