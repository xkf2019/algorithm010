/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0
  let left = 0
  let bottom = 0
  let right = 0
  let rain = 0
  for (let i = 0; i < height.length; i++) {
    // 找出左边界
    if (height[i] >= height[left] && bottom == left) {
      left = i
      bottom = i
      right = i
      continue
    }
    // 找出底部
    console.log(2)
    if (height[i] <= height[bottom] && bottom == right) {
      bottom = i
      right = i
      continue
    }
    right = i
    // 找出右边界
    if (height[i] >= height[right]) {
      right = i
      if (i != (height.length - 1)) {
        continue
      }
    }

    // 计算雨水量
    let minHeight = Math.min(height[left], height[right])
    for (let k = left + 1; k < right; k++) {
      if (height[k] < minHeight) {
        rain = rain + (minHeight - height[k])
      }

    }
    // 重置左边界
    left = right
    bottom = left
    right = bottom
    if (right >= height.length) return rain

  }
  return rain
};
console.log(trap([5, 2, 1, 2, 1, 5]))
