class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // pointers
        // middle
        // find half
        // moves
        // answer -1

        let l = 0;
        let r = nums.length - 1;
        let m = 0;

        while (l < r) {
            m = Math.floor((l + r) / 2);

            if (target === nums[m]) return m;

            // left half is sorted
            if (nums[l] <= nums[m]) {
                if (nums[l] <= target && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                // right half is sorted
                if (nums[m] < target && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }

        return -1;
    }
}
