class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const groups = {};

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const groupKey = word.split('').sort().join('');

            if (groups[groupKey]) {
                groups[groupKey].push(word);
            } else {
                groups[groupKey] = [word];
            }
        }

        return Object.values(groups);
    }
}
