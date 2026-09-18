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

            //3,4,5     6,1,2
            //3 and 5 so

            //left half sorted
            if(nums[l] <= nums[m]){

                //if left value is smaller/equal to the target and mid value is bigger to the target so we eluminate the right part else we elumiate the left part

                if(nums[l] <= target && target < nums[m]){
                    r = m - 1;
                }else{
                    l = m + 1;
                }

            }else{//right half sorted

                //if right value is biggier/equal to the target and mid value is smaller to the target we eluminate the left part else right part


                if(nums[r] >= target && nums[m] < target){
                    l = m + 1;
                }else{
                    r = m - 1;
                }

            }         
        
        }

        return -1;
    }
}
