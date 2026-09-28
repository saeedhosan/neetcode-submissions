class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = new Map();
        let maxf = 0;
        let slow = 0;
        let maxw = 0;

        for (let fast = 0; fast < s.length; fast++) {
            freq.set(s[fast], (freq.get(s[fast]) || 0) + 1);

            maxf = Math.max(maxf, freq.get(s[fast]));

            while (fast - slow + 1 - maxf > k) {
                freq.set(s[slow], freq.get(s[slow]) - 1);
                slow++;
            }
            maxw = Math.max(maxw, fast - slow + 1);
        }

        return maxw;
    }
}
