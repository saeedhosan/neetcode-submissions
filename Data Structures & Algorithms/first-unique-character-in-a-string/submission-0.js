class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {

        const freq = {};

        for(let index = 0; index < s.length; index++){
            const current = s[index];

            freq[current] =  (freq[current] || 0) + 1;    
        }

        for(let index = 0; index < s.length; index++){
            const current = s[index];

            if(freq[current] === 1){
                return index;
            }
        }

        return -1;

        //frequency state init
        //frequency increase - loop 1
        //frequency compares - loop 2
        
    }
}
