class Solution {
    /**
     * Formula: skip or rob -> move forward -> return max rob
     * Time: O(n)
     * Space: O(1)
     * 
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for (const money of nums) {
            const current = Math.max(rob1, rob2 + money);

            // move
            rob2 = rob1;
            rob1 = current;
        }

        return rob1;
    }
}
