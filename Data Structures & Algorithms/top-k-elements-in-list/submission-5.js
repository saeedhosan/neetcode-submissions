class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const count = {};

        //count the each number
        for(const n of nums){
            count[n] = (count[n] || 0) + 1;
        }

        //create fixed-size freq and fll the it e.g [ [], [], [1] ]
        const freq = Array.from({length: nums.length + 1}, () => []);
        for(const c in count){
            freq[count[c]].push(parseInt(c));
        }

        const res = [];

        //go through the reverse of the freq to get the answer
        for(let i = freq.length - 1; i > 0; i--){
            for(const n of freq[i]){

                res.push(n);

                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
