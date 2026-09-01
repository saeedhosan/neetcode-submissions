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
        const res = [];

        if (str.length === 0) return res;

        let slow = 2;
        let fast = parseInt(str[0]) + 2;

        while (slow <= str.length) {
            let char = "";

            while (slow < fast) {
                char += str[slow];
                slow++;
            }

            res.push(char);

            if (slow >= str.length) break;

            let len = 0;

            while (str[slow] !== "#") {
                len = len * 10 + parseInt(str[slow]);
                slow++;
            }

            slow++; // skip #

            fast = slow + len;
        }

        return res;
    }
}
