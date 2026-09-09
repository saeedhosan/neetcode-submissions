class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Time: O(n log n)
        // Space: O(n)
        const freq = {};

        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        return Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((i) => parseInt(i[0]));
    }
}
