class Solution {
    /**
     * @param {string} s
     * @return {number}
     *
     * Time: O(n)
     * Space: O(m)
     */
    lengthOfLongestSubstring(s) {
        // hash map
        // find copy
        // slow move
        // hash push
        // window max

        let seen = new Map();
        let slow = 0;
        let wind = 0;

        for (let fast = 0; fast < s.length; fast++) {
            if (seen.has(s[fast])) {
                slow = Math.max(seen.get(s[fast]) + 1, slow);
            }

            seen.set(s[fast], fast);

            wind = Math.max(wind, fast - slow + 1);
        }

        return wind;
    }
}
