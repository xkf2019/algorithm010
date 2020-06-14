// 解法一 开新数组
/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
var rotate = function (nums, k) {
  const len = nums.length
  if (len < 2) return nums
  const arr = []
  for (let i = 0; i < len; i++) {
    console.log((i + k) % len)
    arr[(i + k) % len] = nums[i]
  }
  return arr

};

/**
 * 解法二
 * 原理：定义一个 count 计录数组元素移动个数，数组每个元素移动一次
 * 定义一个start 和 一个 beginIndex, beginIndex 记录第一次换位的开始索引
 * start 记录每次换位的索引，start === beginIndex 则表示完成一次换位循环
 * 若一次循环后 count 不为数组长度，则表示本次循环外的元素没有换位
 * 将beginIndex 指向下一次，再次进入循环，直至 count 等于数组长度。
 */
/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
var rotate = function (nums, k) {
  const len = nums.length
  if (len < 2) return nums
  let count = 0;
  for (let start = 0; count < len; start++) {
    let beginIndex = start
    let findPositionNum = nums[start]
    do {
      let nextIndex = (start + k) % len
      let nextNum = nums[nextIndex]
      nums[nextIndex] = findPositionNum
      findPositionNum = nextNum
      start = nextIndex
      count++
    } while (start != beginIndex)
  }
};


/**
 * 解法三
 * 规律：三次翻转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length
  if (len < 2) return nums
  k = k % len
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)


};
function reverse(arr, start, end) {
  while (start < end) {
    arr[start] = arr[start] ^ arr[end]
    arr[end] = arr[start] ^ arr[end]
    arr[start] = arr[start] ^ arr[end]
    start++
    end--
  }
}