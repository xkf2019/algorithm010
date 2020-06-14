class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length < 1) return nums.length;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != nums[j]) {
                j++;
                nums[j] = nums[i];
            }
        }
        return j + 1;
    }
}