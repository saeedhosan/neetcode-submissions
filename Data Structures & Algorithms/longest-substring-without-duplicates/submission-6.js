class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     * Time: O(n)
     * Space: O(m)
     */
    lengthOfLongestSubstring(s) {
        
        //zxyzxyz
        let slow = 0;
        let fast = 0;
        let long = 0; //longest window
        let sets = new Set;


        while(fast < s.length){

            //remove duplicates from the sets e.g set has zxy and current z so delete z that will xy
            while(sets.has(s[fast])){
                sets.delete(s[slow]);
                slow++;
            }

            sets.add(s[fast]); // now add the crurrent z xyz

            long = Math.max(long, fast - slow + 1);

            fast++;
        }

        return long;
    }
}
