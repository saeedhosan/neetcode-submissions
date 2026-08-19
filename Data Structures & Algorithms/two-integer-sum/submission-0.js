class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const seen = {}

        for(let index =0; index < nums.length; index++){

            const current = nums[index]
            const needed  = target - current;

            //check seen and return [seen[needed], index]
            if(seen[needed] !== undefined){
                return [
                    seen[needed],
                    index
                ];
            }

            //Not found store it in seen
            seen[current] = index;
        }

        //fallback empty array
        return []
    }
}
