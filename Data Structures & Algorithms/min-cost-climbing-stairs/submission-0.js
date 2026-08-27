class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const dp = [cost[0], cost[1]];

        for (let i = 2; i < cost.length; i++) {
            const previous = dp[i - 1];
            const previousPrevious = dp[i - 2];
            dp[i] = cost[i] + Math.min(previous, previousPrevious);
        }

        // TOP is after the last stair
        return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
    }
}
