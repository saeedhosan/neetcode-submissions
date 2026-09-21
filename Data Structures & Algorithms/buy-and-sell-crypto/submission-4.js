class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // we are given an integer array
        // where price of neetcoin on ith day
        // we may choose a single day to buy one coin and choose a diffrent day in the future to sell it
        // we need to return the maximum profit we can make.
        // if we cant not make any transaction we return 0

        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++){
            for(let j = i + 1; j < prices.length; j++){
                const buy = prices[i];
                const sell = prices[j];
                const profit = sell - buy;

                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit;
    }
}
