class Solution {
    /**
     * Time: O(n) and Space: O(1)
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let m = Infinity;

        for(let i = 0; i < nums.length;i++){

            m = Math.min(m, nums[i]);
        }

        return m;
    }
}
