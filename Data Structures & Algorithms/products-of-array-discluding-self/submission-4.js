class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = Array(len).fill(1);

        let prefix = 1;
        let suffix = 1;

        for (let i = 0; i < len; i++) {
            const j = len - 1 - i;

            // prefix
            res[i] *= prefix;
            prefix *= nums[i];

            // suffix
            res[j] *= suffix;
            suffix *= nums[j];
        }

        return res;
    }
}
