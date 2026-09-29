class Solution {
    /**
     * Time : O(n)
     * Space: O(k)
     * 
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = new Map();
        let maxf = 0;
        let wind = 0;
        let slow = 0;

        for(let fast = 0; fast < s.length; fast++){

            //imcrement frequency
            freq.set(s[fast], (freq.get(s[fast]) || 0) + 1);

            //update max freqency
            maxf = Math.max(maxf, freq.get(s[fast]));

            //decrement unless k size
            while(fast - slow + 1 - maxf > k){
                freq.set(s[slow], freq.get(s[slow]) - 1);
                slow++;
            }

            //update max window
            wind = Math.max(wind, fast - slow + 1);
        }

        return wind;
    }
}
