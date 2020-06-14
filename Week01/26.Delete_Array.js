/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length
  let i = 1
  while (nums[i] != undefined) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      continue
    }
    i++
  }
};