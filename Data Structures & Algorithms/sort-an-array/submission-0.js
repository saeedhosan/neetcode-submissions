class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // base case
        // if 0 or 1 element → already sorted → return

        // divide
        // split array into left and right

        // sort left
        // recursively sort left

        // sort right
        // recursively sort right

        // merge
        // merge the two sorted halves

        // return
        // return the merged sorted array

        if (nums.length <= 1) {
            return nums;
        }

        const mid = Math.floor(nums.length / 2);
        const left = nums.slice(0, mid);
        const right = nums.slice(mid);

        const sorted_left = this.sortArray(left);
        const sorted_right = this.sortArray(right);

        return this.merge(sorted_left, sorted_right);
    }

    /**
     * @param {number[]} left
     * @param {number[]} right
     * @return {number[]}
     */
    merge(left, right) {
        // pointers
        // left pointer + right pointer

        // compare
        // compare current elements

        // take smaller
        // add smaller element to result
        // move that pointer

        // remaining
        // add remaining elements

        // return
        // return sorted result

        const result = [];
        let l = 0;
        let r = 0;

        while (l < left.length && r < right.length) {
            if (left[l] - right[r] <= 0) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }

        while (l < left.length) {
            result.push(left[l]);
            l++;
        }

        while (r < right.length) {
            result.push(right[r]);
            r++;
        }

        return result;
    }
}
