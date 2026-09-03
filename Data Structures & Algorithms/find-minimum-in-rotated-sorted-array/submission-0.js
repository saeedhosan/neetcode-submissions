class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // pointers
        // middle
        // compare
        // moves
        // answer
        // Time: O(log n)
        // Space: O(1)

        let l = 0;
        let r = nums.length - 1;
        let m = 0;

        while (l < r) {
            m = Math.floor((l + r) / 2);

            if (nums[m] < nums[r]) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return nums[l];
    }
}
