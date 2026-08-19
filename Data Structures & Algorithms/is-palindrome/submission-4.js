class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        //initialize states
        let left = 0;
        let right = s.length - 1;

        while(left < right){

            //skip pointer special characters
            if(!/[a-z0-9]/i.test(s[left])){
                left++;
                continue;
            }

            //skip pointer special characters
            if(!/[a-z0-9]/i.test(s[right])){
                right--;
                continue;
            }

            //compare both pointers with slowercase
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }

            //move pointers
            left++;
            right--;
        }

        //final return
        return true;
    }
}
