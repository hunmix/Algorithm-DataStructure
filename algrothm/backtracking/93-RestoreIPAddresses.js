/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ret = []
  _restoreIpAddresses(s, 0, 0, ret, '')
  return ret
};

const _restoreIpAddresses = (s, index, count, result, str) => {
  if (count > 4) {
    return
  }
  if (count === 4 && index >= s.length) {
    result.push(str.slice(0, str.length - 1))
  }

  const num = s.length - index < 3 ? s.length - index : 3
  for (let i = 0; i < num; i++) {
    const temp = s.slice(index, index + i + 1)
    if (!isInRange(temp)) {
      continue
    }
    _restoreIpAddresses(s, index + i + 1, count + 1, result, `${str}${temp}.`)
  }
}

const isInRange = (value) => {
  if (value[0] === '0' && value.length >= 2) {
    return false
  }
  return value >= 0 && value <= 255
}

console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('010010'))