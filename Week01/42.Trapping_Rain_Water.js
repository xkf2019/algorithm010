/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height == null || height.length < 3) return 0
  let rain = 0
  let left = 0
  let right = height.length - 1
  let max_left = 0
  let max_right = height.length - 1
  while (left < right) {
    if (height[left] > height[right]) {
      if (height[right] > height[max_right])
        max_right = right
      else
        rain += height[max_right] - height[right]
      right--

    } else {
      if (height[left] > height[max_left])
        max_left = left
      else
        rain += height[max_left] - height[left]
      left++
    }
  }
  return rain
};