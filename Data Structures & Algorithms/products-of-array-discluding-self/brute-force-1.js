class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const o = new Array(n);

        for (let i = 0; i < n; i++) {
            let sum = 1;
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    sum = sum * nums[j];
                }
            }
            o[i] = sum;
        }
        return o;
    }
}
