class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //visit
        //needs
        //saves

        const seen = {};

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            const needs = target - value;

            if (seen[needs] !== undefined) {
                return [seen[needs], i];
            }

            seen[value] = i;
        }

        return [];
    }
}
