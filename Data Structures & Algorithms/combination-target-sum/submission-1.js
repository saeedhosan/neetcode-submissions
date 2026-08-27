class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const current = [];
        const result = [];

        this.dfs(nums, result, current, target, 0, 0);

        return result;
    }

    dfs(nums, result, current, target, index, total) {
        // save
        if (total === target) {
            result.push([...current]);
            return;
        }

        // stop
        if (total > target || index === nums.length) {
            return;
        }

        // take
        current.push(nums[index]);
        this.dfs(nums, result, current, target, index, total + nums[index]);
        current.pop();

        // skip
        this.dfs(nums, result, current, target, index + 1, total);
    }
}
