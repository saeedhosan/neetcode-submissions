class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //max profit
        //min bought
        //max return

        let max_profit = 0;
        let min_bought = prices[0];

        for(let sell of prices){
            max_profit = Math.max(max_profit, sell - min_bought);
            min_bought = Math.min(min_bought, sell);
        }

        return max_profit;
    }
}
