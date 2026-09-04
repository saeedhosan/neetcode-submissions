class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * 
     * Time: O(n)
     * Space: O(1)
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const currentProfit = prices[i] - minPrice;

            maxProfit = Math.max(maxProfit, currentProfit);
            minPrice = Math.min(minPrice, prices[i]);
        }

        return maxProfit;
    }
}
