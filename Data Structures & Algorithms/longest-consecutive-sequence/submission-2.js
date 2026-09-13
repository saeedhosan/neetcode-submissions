class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        let set = new Set(nums);
        let max = 0;

        for (let num of set) {
            if (!set.has(num - 1)) {
                let len = 1;
                while (set.has(num + len)) {
                    len++;
                }
                max = Math.max(max, len);
            }
        }

        return max;
    }
}
