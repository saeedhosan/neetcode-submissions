class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let slow = 0;
        let fast = 1;

        while(fast < nums.length){
            if(nums[slow] === nums[fast]){
                return true;
            }
            slow++;
            fast++; 
        }

        return false;
    }
}
