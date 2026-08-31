class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * Time and space: O(n)
     */
    twoSum(nums, target) {
        //visit
        //needed
        //save

        const seen = {};
 
        for(let i = 0; i < nums.length; i++){
            const current = nums[i];
            const needed  = target - current;
            
            if(seen[needed] !== undefined){
                return [seen[needed], i];
            }

            seen[current] = i;
        }

        return [];       
    }
}
