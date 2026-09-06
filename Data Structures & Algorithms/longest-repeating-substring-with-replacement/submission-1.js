class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // sliding window
        // frequency
        // max frequency
        // window length
        // replacements
        // move slow
        // max window
        let res = 0;
        let slow = 0;
        let freq = {};
        let maxf = 0;

        for (let fast = 0; fast < s.length; fast++) {
            const char = s[fast];

            freq[char] = (freq[char] || 0) + 1;

            maxf = Math.max(maxf, freq[char]);

            let wind = fast - slow + 1;

            while (wind - maxf > k) {
                freq[s[slow]]--;
                slow++;
                wind = fast - slow + 1;
            }

            res = Math.max(res, wind);
        }

        return res;
    }
}
