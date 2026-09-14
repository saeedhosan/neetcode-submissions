class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        s = s.split('').filter(a => /[a-z0-9]/.test(a));
        return s.join('') === s.reverse().join('');
    }
}
