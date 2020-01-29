/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const ret = []
  const leds = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32]
  _readBinaryWatch(num, ret, leds, 0)
  return ret
};

const _readBinaryWatch = (num, ret, leds, index, hSum = 0, mSum = 0, count = 0) => {
  // if (index > leds.length) {
  //   return
  // }
  if (hSum > 11 || mSum > 59) {
    return
  }
  if (count === num) {
    ret.push(`${hSum}:${mSum < 10 ? `0${mSum}` : mSum}`)
    return
  }
  for (let i = index; i < leds.length; i++) {
    let tempH = hSum
    let tempM = mSum
    if (i <= 3) {
      tempH += leds[i]
      // if (hSum + leds[i] > 11) {
      //   continue
      // }
      // _readBinaryWatch(num, ret, leds, i + 1, hSum + leds[i], mSum, count + 1)
    } else if (i > 3 && i < leds.length) {
      tempM += leds[i]
      // if (mSum + leds[i] > 60) {
      //   continue
      // }
      // _readBinaryWatch(num, ret, leds, i + 1, hSum, mSum + leds[i], count + 1)
    }
      _readBinaryWatch(num, ret, leds, i + 1, tempH, tempM, count + 1)
  }
}

// console.log(readBinaryWatch(1))
// console.log(readBinaryWatch(2))
// console.log(readBinaryWatch(3))
console.log(readBinaryWatch(4).reverse())