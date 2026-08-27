class Solution {
    /**
     * Formula: Base case, Check saved, Calculate, Store, Return
     * Time: O(n)
     * Space: O(n)
     * 
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        const dp = [];

        const dfs = (n) => {
            if (n <= 2) return n;

            if (dp[n] !== undefined) return dp[n];

            const calc = dfs(n - 1) + dfs(n - 2);

            dp[n] = calc;

            return calc;
        };

        return dfs(n);
    }
}
