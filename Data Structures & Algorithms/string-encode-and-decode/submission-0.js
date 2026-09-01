class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return res;

        const res = [];

        let slow = 0;

        while (slow < str.length) {
            // Find #
            let hash = slow;

            while (str[hash] !== "#") {
                hash++;
            }

            // Get length
            const length = parseInt(str.slice(slow, hash));

            // String starts after #
            slow = hash + 1;

            // String ends after `length` characters
            let fast = slow + length;

            let char = "";

            for (let i = slow; i < fast; i++) {
                char += str[i];
            }

            res.push(char);

            // Move to next encoded string
            slow = fast;
        }

        return res;
    }
}
