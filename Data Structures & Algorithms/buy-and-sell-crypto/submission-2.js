class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * 
     * Time: O(n)
     * Space: O(1)
     */
    maxProfit(prices) {
        let max_profit = 0;
        let min_buy = prices[0];

        for (let sell of prices) {
            max_profit = Math.max(max_profit, sell - min_buy);
            min_buy = Math.min(min_buy, sell);
        }
        return max_profit;
    }
}
