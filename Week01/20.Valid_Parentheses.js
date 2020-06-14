/**
 *  * @param {string} s
 * @return {boolean}
 */
// 有效的括号
var isValid = function (s) {
  s = s.replace(/\s/g, '')
  s = s.split('')
  arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(')
      arr.push(')')
    else if (s[i] === '[')
      arr.push(']')
    else if (s[i] === '{')
      arr.push('}')
    else if (s[i] !== arr.pop())
      return false
  }
  return arr.length === 0
};