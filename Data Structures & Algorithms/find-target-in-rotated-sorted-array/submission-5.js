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

            //Return the mid index when target is found
            if(nums[m] === target) return m;


            //we need to find the left/right sorted by left value less then or equel to the mid value
            if(nums[l] <= nums[m]){
                //now we found the left sorted part

                //when we find the target value in the left sorted part we simply eluminate the right part else we eluminate left part

                if(nums[l] <= target && target < nums[m]){
                    //now found target value in in the left sorted
                    r = m - 1;
                }else{
                    l = m + 1;
                }


            }else{
                //now we found the right sorted part

                //when the mid value less then the target and less then the left value we know we the target value in in the right sorted so we eluminte the left part else we will eluminte the right part

                if(nums[m] < target && target <= nums[r]){
                    //now we know the target value is in the right here so we eluminte the left value 
                    l = m + 1;
                }else{
                    r = m - 1;
                }
            }
        }

        //3,4,5,6,1,2
            //3,4,5,    6,1,2
            //if left value <= mid value
            //  so we got the left is sorted
            //  if left value <= target and target < mid value
            //      eluminate right part 
            //  else 
            //      eluminate left part
            //else:
            //  else we got the right is sorted
            //  if mid value < target and target < right value
            //      eluminate left part
            //  else 
            //      eluminate right part

        return -1;
    }
}
