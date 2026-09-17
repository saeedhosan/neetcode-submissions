class Solution {
    /**
     * Time: O(log n)
     * Space: O(1)
     * 
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        while(l < r){
            let m = Math.floor((r - l) / 2) + l;

            //when 5 < 2 so move left 
            if(nums[m] < nums[r]){
                r = m;
            }else{
                l = m + 1;
            }
        }

        return nums[l];
    }
}
