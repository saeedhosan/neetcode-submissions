class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l < r){
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const water = height * width;

            maxWater = Math.max(maxWater, water);

            if(heights[l] < heights[r]){
                l += 1;
            }else{
                r -= 1;
            }
        }

        return maxWater;
    }
}
