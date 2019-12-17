/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0
    }
    map[s[i]]++
  }
  for (let j = 0; j < t.length; j++) {
    if (map[t[j]] !== undefined && map[t[j]] > 0) {
      map[t[j]]--
    } else {
      return false
    }
  }
  return true
};

console.log(isAnagram("rat", "cat"))
console.log(isAnagram("anagram", "nagaram"))