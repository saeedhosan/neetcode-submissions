class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r){
            let m = Math.floor((r - l) / 2) + l;

            if(nums[m] === target) return m;

            //1,0,2 ,4,6,8
            if(nums[m] < target){
                l = m + 1;
            }else{
                r = m - 1;
            }
        }

        return -1;
    }
}
