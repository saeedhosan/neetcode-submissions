class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for (let current = 1; current <= amount; current++) {
            for (const coin of coins) {
                if (coin <= current) {
                    const candidate = dp[current - coin] + 1;

                    dp[current] = Math.min(dp[current], candidate);
                }
            }
        }

        if (dp[amount] === Infinity) {
            return -1;
        }

        return dp[amount];
    }
}
