class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        const freq = {};

        // Count frequency
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            freq[current] = (freq[current] || 0) + 1;
        }

        // Convert to [number, frequency]
        const entries = Object.entries(freq);

        // Highest frequency first
        entries.sort((a, b) => b[1] - a[1]);

        // Get top K
        const result = [];

        for (let i = 0; i < k; i++) {
            result.push(Number(entries[i][0]));
        }

        return result;
    }
}
