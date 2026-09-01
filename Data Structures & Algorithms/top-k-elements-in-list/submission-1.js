class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Count frequency
        const freq = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            freq[num] = (freq[num] || 0) + 1;
        }

        // Frequency buckets
        const buckets = [];
        for (let i = 0; i <= nums.length; i++) {
            buckets[i] = [];
        }

        // Put numbers into their frequency bucket
        for (const num in freq) {
            buckets[freq[num]].push(Number(num));
        }

        // Get K most frequent
        const result = [];

        for (let i = nums.length; i >= 1; i--) {
            for (let j = 0; j < buckets[i].length; j++) {
                result.push(buckets[i][j]);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
