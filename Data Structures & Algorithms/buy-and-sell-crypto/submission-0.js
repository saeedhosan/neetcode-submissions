class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     *
     * Time: O(n²)
     * Space: O(1)
     */
    maxProfit(prices) {
        let profit = 0;

        for(let day = 0; day < prices.length; day++){
            const buy = prices[day];

            for(let i = day + 1; i < prices.length; i++){
                const sell = prices[i] - buy;

                profit = Math.max(profit, sell);
            }
        }

        return profit;
    }
}
