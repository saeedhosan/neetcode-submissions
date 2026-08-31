class Solution {
    /**
    *  Time: O(n), Space: O(k) 
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //same length
        //frequencies
        //compare

        if (s.length !== t.length) return false;

        const freq = {};

        for (let i = 0; i < s.length; i++) {
            freq[s[i]] = (freq[s[i]] || 0) + 1;
            freq[t[i]] = (freq[t[i]] || 0) - 1;
        }

        for(const char in freq){
            if(freq[char] !== 0){
                return false;
            }
        }

        return true;
    }
}
