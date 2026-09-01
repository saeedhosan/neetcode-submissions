class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);

        let pre = nums[0];
        let len = 1;
        let max = 1;

        for (const num of nums) {

            // duplicate - ignore
            if (num === pre) {
                continue;
            }

            // if consecutive - extend sequence
            // if sequence broke - reset sequence
            if (num === pre + 1) {
                len++;
            } else {
                len = 1; 
            }

            pre = num;
            max = Math.max(max, len);
        }

        return max;
    }
}
