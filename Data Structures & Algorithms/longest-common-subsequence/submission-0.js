class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const dp = Array.from({ length: text1.length + 1 }, () =>
            new Array(text2.length + 1).fill(0),
        );

        for (let row = text1.length - 1; row >= 0; row--) {
            for (let col = text2.length - 1; col >= 0; col--) {
                if (text1[row] === text2[col]) {
                    dp[row][col] = 1 + dp[row + 1][col + 1];
                } else {
                    dp[row][col] = Math.max(dp[row][col + 1], dp[row + 1][col]);
                }
            }
        }

        return dp[0][0];
    }
}
