class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;

        for (let slow = 0; slow < s.length; slow++) {
            for (let fast = slow; fast < s.length; fast++) {

                let duplicate = false;

                for (let i = slow; i < fast; i++) {
                    if (s[i] == s[fast]) {
                        duplicate = true;
                        break;
                    }
                }

                if (duplicate) break;

                const window = fast - slow + 1;

                res = Math.max(res, window);
            }
        }

        return res;
    }
}
