class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let answer = 0;

        for (let slow = 0; slow < s.length; slow++) {
            let count = {};
            let maxFq = 0;

            for (let fast = slow; fast < s.length; fast++) {
                const char = s[fast];

                count[char] = (count[char] || 0) + 1;

                maxFq = Math.max(maxFq, count[char]);

                const length = fast - slow + 1;

                const replace = length - maxFq;

                if (replace <= k) {
                    answer = Math.max(answer, length);
                }
            }
        }

        return answer;
    }
}
