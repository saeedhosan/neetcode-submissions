class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const seen = {};

        for(let i = 0; i < nums.length; i++){
            const current = nums[i];

            if(seen[current]){
                return true;
            }

            seen[current] = true;
        }

        return false;
    }
}
