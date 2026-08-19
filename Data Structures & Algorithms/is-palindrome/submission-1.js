class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        //create left and right states
        let left = 0;
        let right = s.length - 1;

        while(left < right){

            //skip left special characters
            if(!/[a-z0-9]/i.test(s[left])){
                left++;
                continue;
            }

            //skip right special characters
            if(!/[a-z0-9]/i.test(s[right])){
                right--;
                continue;
            }

            //compare left and right with slower string
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }

            //moves
            left++;
            right--;
        }

        //final return true
        return true;
    }
}
