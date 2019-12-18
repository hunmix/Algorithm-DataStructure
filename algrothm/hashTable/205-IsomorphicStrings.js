/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const map = {}
  const  map2 = {}
  for (let i = 0; i < t.length; i++) {
    if (!map[s[i]] && !map2[t[i]]) {
      map[s[i]] = t[i]
      map2[t[i]] = true
    } else if (map[s[i]] !== t[i]) {
      return false
    }
  }
  return true
};
console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("ab", "aa"))