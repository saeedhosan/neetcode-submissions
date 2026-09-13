class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = Array(len).fill(0);

        let prefix = 1;

        for (let i = 0; i < len; i++) {
            res[i] = prefix;
            prefix = prefix * nums[i];
        }

        prefix = 1;

        for (let i = len - 1; i >= 0; i--) {
            res[i] = prefix * res[i];
            prefix = prefix * nums[i];
        }

        return res;
    }
}
