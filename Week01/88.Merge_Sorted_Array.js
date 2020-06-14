// 合并两个数组
var merge = function (nums1, m, nums2, n) {
  nums1.length = m
  for (let i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j]
  }
  nums1 = nums1.sort((a, b) => a - b)
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j])
      nums1[k--] = nums1[i--]
    else
      nums1[k--] = nums2[j--]
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }

};