class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let slow = 0;
        let fast = 1;
        let maxProfit = 0;

        while(fast < prices.length){
            const buy = prices[slow];
            const sell = prices[fast];

            //buy low lowest then selling price
            if(buy < sell){
                const profit = sell - buy;
                maxProfit = Math.max(maxProfit, profit);
            }else{

                //when can't buy so move to fast position
                slow = fast;
            }

            fast++;
        }

        return maxProfit;
    }
}
