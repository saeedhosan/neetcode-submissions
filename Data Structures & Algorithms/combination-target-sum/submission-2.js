class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        this.dfs(nums, target, result, current, 0);

        return result;
    }

    dfs(nums, target, result, current, index) {
        // save
        if (target === 0) {
            result.push([...current]);
            return;
        }

        // stop
        if (target < 0 || index === nums.length) {
            return;
        }

        // take
        current.push(nums[index]);
        this.dfs(nums, target - nums[index], result, current, index);

        // undo
        current.pop();

        // skip
        this.dfs(nums, target, result, current, index + 1);
    }
}
