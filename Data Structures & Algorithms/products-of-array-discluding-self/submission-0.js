class Solution {
    /**
     * Time:  O(n)
     * Space: O(1)
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length;
        let out = Array.from({ length: len }, () => 0);

        let prefix = 1;

        for (let i = 0; i < len; i++) {
            out[i] = prefix;
            prefix = prefix * nums[i];
        }

        prefix = 1;

        for (let i = len - 1; i >= 0; i--) {
            out[i] = out[i] * prefix;
            prefix = prefix * nums[i];
        }

        return out;
    }
}
