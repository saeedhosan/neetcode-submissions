class Solution {
    /**
     * The basic solution
     * 
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        //case: ()[] fail

        let l = 0;
        let r = s.length - 1;

        const pairs = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        while (l <= r) {

            if (pairs[s[l]] === undefined) return false;

            if (pairs[s[l]] !== s[r]) return false;

            l++;
            r--;
        }

        return true;
    }
}
