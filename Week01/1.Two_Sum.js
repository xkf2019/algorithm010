// 两数之和
var twoSum = function (nums, target) {
  const meno = {}
  for (let i = 0; i < nums.length; i++) {
    if (meno[nums[i]] != undefined) {
      return [meno[nums[i]], i]
    }
    meno[target - nums[i]] = i;
  }
  return []
};