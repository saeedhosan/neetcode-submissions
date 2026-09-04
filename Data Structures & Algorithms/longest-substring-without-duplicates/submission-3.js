class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let slow = 0;
        let seen = new Set();
        let wind = 0;

        for (let fast = 0; fast < s.length; fast++) {
            //move untill 
            while (seen.has(s[fast])) {
                seen.delete(s[slow]);
                slow++;
            }

            seen.add(s[fast]);

            wind = Math.max(wind, fast - slow + 1);
        }

        return wind;
    }
}
