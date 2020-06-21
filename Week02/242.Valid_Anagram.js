/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false
  let arr = []
  arr.length = 26
  arr.fill(0)
  let arr1 = s.split('')
  let arr2 = t.split('')
  for (let i = 0; i < s.length; i++) {
    arr[arr1[i].charCodeAt() - 97]++
    arr[arr2[i].charCodeAt() - 97]--
  }
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false
    }
  }
  return true
}