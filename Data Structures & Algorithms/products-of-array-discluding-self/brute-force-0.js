class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //0 = 2 * 4 * 6 = 48
        //1 = 1 * 4 * 6 = 24
        //2 = 1 * 2 * 6 = 12
        //3 = 1 * 2 * 4 = 8

        //Time: O(n * n)
        //Space: O(n)

        const res = [];

        for(let i = 0; i < nums.length; i++){
            let sum = 1;

            for(let j = 0; j < nums.length; j++){
                if(j !== i){
                    sum = sum * nums[j];
                }
            }

            res.push(sum);
        }

        return res;
    }
}
