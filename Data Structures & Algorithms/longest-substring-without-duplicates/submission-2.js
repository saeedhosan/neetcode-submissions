class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;

        for (let slow = 0; slow < s.length; slow++) {
            let visit = new Set();

            for (let fast = slow; fast < s.length; fast++) {
                if (visit.has(s[fast])) {
                    break;
                }
                
                visit.add(s[fast]);
            }

            res = Math.max(res, visit.size);
        }

        return res;
    }
}
