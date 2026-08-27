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
        if (total === target) {
            result.push([...current]);
            return;
        }

        if (total > target) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);

            this.dfs(nums, result, current, target, i, total + nums[i]);

            current.pop();
        }
    }
}
