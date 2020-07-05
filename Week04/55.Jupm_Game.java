class Solution {
    public boolean canJump(int[] nums) {
        if (nums == null) return false;
        int canReachableIndex = nums.length - 1;
        for (int i = nums.length - 1; i >= 0; i-- ) {
            if (nums[i] + i >= canReachableIndex) {
                canReachableIndex = i;
            }
        }
        return canReachableIndex == 0;
    }
}