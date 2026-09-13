class Solution {
    /**
     * Time: O(n)
     * Space: O(n)
     * 
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length;
        let res = Array(len).fill(1);
        let prefix = 1;

        for (let i = 0; i < len; i++) {
            res[i] = prefix;
            prefix = prefix * nums[i];
        }

        prefix = 1;

        for (let i = len - 1; i >= 0; i--) {
            res[i] = res[i] * prefix;
            prefix = prefix * nums[i];
        }

        return res;
    }
}
