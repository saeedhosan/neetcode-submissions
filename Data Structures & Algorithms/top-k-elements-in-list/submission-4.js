class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // nums: [1,1,1,2,2,3]

        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        // count = {'1': 3, '2': 2, '3': 1}
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        //count['1']= 3, count['2']=2, count['3']=1
        //freq = [[], [3], [2], [1], [], [],]
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];

        // freq = [[], [3], [2], [1], [], [],]
        for (let i = freq.length - 1; i > 0; i--) {
            // skip empty array
            // push 1 -> res = [1]
            // push 2 -> res = [1, 2]
            // return res of k size
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return [];
    }
}
