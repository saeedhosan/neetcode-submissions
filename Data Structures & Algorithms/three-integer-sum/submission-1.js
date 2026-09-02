class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * Time: O(n^2)
     * Space: O(1)
     */
    threeSum(nums) {
        // sort

        // fix i
        // skip duplicates

        // left + right
        // while

        // compare sum with 0
        // save if sum == 0
        // move pointers
        // skip duplicates

        nums.sort((a, b) => a - b);

        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
